<template>
    <div class="scraper">
        <input type="text" placeholder="Enter URL" v-model="request" />
        <button @click="extractTextFromURL" :disabled="loading">
            {{ loading ? 'Carregando…' : 'Extrair Texto' }}
        </button>

        <p v-if="error" class="error">{{ error }}</p>

        <div v-if="result" class="output">
            <h2>{{ result.name }}</h2>
            <p><strong>URL:</strong> {{ result.url }}</p>
            <p><strong>Descrição:</strong> {{ result.description }}</p>
            <p><strong>Caracteres:</strong> {{ result.countCharacters }}</p>
            <p><strong>Open Graph:</strong> {{ result.ogUrl }}</p>
            <div class="filter">
                <h3>Conteúdo:</h3>
                <pre>{{ result.content }}</pre>

                <input v-model="searchTerm" placeholder="Buscar no conteúdo" />
                <select v-model="mode">
                    <option value="exact">Exata</option>
                    <option value="fuzzy">Aproximada</option>
                </select>
                <button @click="filterContent">Filtrar</button>

                <div v-for="(item, i) in snippets" :key="i" class="snippet">
                    <details>
                        <summary v-html="item.highlighted"></summary>
                        <p>{{ item.context }}</p>
                    </details>
                </div>
            </div>
            <div v-if="result.urls.length">
                <h3>Links Encontrados:</h3>
                <ul>
                    <li v-for="(link, i) in result.urls" :key="i">
                        <a :href="link" target="_blank">{{ link }}</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

// 1. Estados reativos
const request = ref('')
const loading = ref(false)
const error = ref('')
interface ScrapeResult {
    url: string
    content: string
    name: string
    description: string
    ogUrl: string
    countCharacters: number
    urls: string[]
}
const result = ref<ScrapeResult | null>(null)

// 2. Função de fetch usando API nativa
async function extractTextFromURL() {
    if (!request.value) {
        error.value = 'Por favor, insere uma URL válida.'
        return
    }
    loading.value = true
    error.value = ''
    result.value = null

    try {
        const res = await fetch(
            `https://api.supadata.ai/v1/web/scrape?url=${encodeURIComponent(request.value)}`,
            { headers: { 'x-api-key': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImtpZCI6IjEifQ.eyJpc3MiOiJuYWRsZXMiLCJpYXQiOiIxNzQ1OTQ2NzgyIiwicHVycG9zZSI6ImFwaV9hdXRoZW50aWNhdGlvbiIsInN1YiI6IjQ1YzdjZjk0MjQ2NzRmNmE4Y2FhNDI1NGVjMDEyOTM3In0.JSF8YKlQ5z5Gr3Oaijdt7azQPCTRcYb_4fR2iFHSqOE' } }
        )                                                    // :contentReference[oaicite:6]{index=6} :contentReference[oaicite:7]{index=7}
        if (!res.ok) throw new Error(`Erro HTTP: ${res.status}`)  // :contentReference[oaicite:8]{index=8}

        const data = (await res.json()) as ScrapeResult        // :contentReference[oaicite:9]{index=9}
        result.value = data
    } catch (err: any) {
        error.value = err.message || 'Erro desconhecido'
    } finally {
        loading.value = false
    }
}

// result.value = {
//     url: 'https://example.com',
//     content: 'Conditional rendering is a powerful feature in Vue.',
//     name: 'Example',
//     description: 'An example description.',
//     ogUrl: 'https://example.com/og',
//     countCharacters: 50,
//     urls: ['https://example.com/link1', 'https://example.com/link2'],
// };

const raw = ref('');
watch(result, (newResult) => {
    raw.value = newResult?.content || '';
}, { immediate: true });

const searchTerm = ref('')
const mode = ref<'exact' | 'fuzzy'>('exact')
const snippets = ref<{ highlighted: string; context: string }[]>([])

function filterContent() {
    const text = raw.value;
    // 1) Reset snippets
    snippets.value = [];

    if (!text) {
        console.error('No content to search in.');
        return;
    }

    if (mode.value === 'exact') {
        const regex = new RegExp(searchTerm.value, 'gi');
        const matches = [...text.matchAll(regex)];
        snippets.value = matches.map((m) => {
            const pos = m.index ?? 0;
            const len = m[0].length;
            const pad = 50;
            const start = Math.max(0, pos - pad);
            const end = Math.min(text.length, pos + len + pad);
            const context = text.substring(start, end);
            const highlighted = context.replace(regex, (g) => `<mark>${g}</mark>`);
            return { highlighted, context };
        });
    } else {
        // 2) Fuzzy: transforma texto em array de sentenças
        const sentences = text.split(/(?<=[.?!])\s+/);
        const regexFuzzy = new RegExp(searchTerm.value, 'i');

        // 3) Filtra sentenças que contenham o termo
        const filtered = sentences.filter(s => regexFuzzy.test(s));

        // 4) Mapeia para snippets com contexto + highlight
        snippets.value = filtered.map((s) => {
            const idx = s.toLowerCase().indexOf(searchTerm.value.toLowerCase());
            const pad = 20;
            const start = Math.max(0, idx - pad);
            const end = Math.min(s.length, idx + searchTerm.value.length + pad);
            const context = s.substring(start, end);
            const highlighted = context.replace(
                new RegExp(searchTerm.value, 'gi'),
                (g) => `<mark>${g}</mark>`
            );
            return { highlighted, context };
        });
    }
}
</script>