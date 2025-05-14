<template>
    <div class="title">Customer Service</div>
    <div class="custom-services">
        <div class="services" v-for="(service) in services">
            <div class="square"></div>
            <div class="name">{{ service.name }}</div>
            <div class="description">
                <ul>
                    <li v-for="(desc) in service.description" :key="desc">
                        {{ desc }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    interface Service {
        name: string;
        description: string[];
    }

    const services: Service[] = [
        {
            name: 'Customer Service',
            description: [
                '24/7 support',
                'Live chat',
                'Email support',
                'Phone support',
            ],
        },
        {
            name: 'Technical Support',
            description: [
                '24/7 support',
                'Live chat',
                'Email support',
                'Phone support',
            ],
        },
        {
            name: 'Sales Support',
            description: [
                '24/7 support',
                'Live chat',
                'Email support',
                'Phone support',
            ],
        },
        {
            name: 'Sales Support',
            description: [
                '24/7 support',
                'Live chat',
                'Email support',
                'Phone support',
            ],
        },
        {
            name: 'Custom Software Development',
            description: [
                'Build fully tailored platforms for your specific needs;',
                'Accelerate development with scalable, moderns architecture;',
                'Deliver intuitive interfaces and seamless user experiences.',
            ],
        },
    ]
</script>
<style lang="scss" scoped>
    .title {
        font-size: 1.5rem;
        font-weight: bold;
        margin: 2rem;
        text-align: center;
    }
    .custom-services {
        display: grid;
        grid-template-columns: repeat(3, minmax(200px, 1fr));
        grid-template-rows: repeat(auto-fill, minmax(100px, 1fr));
        gap: 20px;
        border-radius: 0.5rem;
        margin-bottom: 1rem;
        color: #fff;

    .services {
        background-color: #141414;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 36px 9px 57px 32px;
        border-radius: 0.35rem;

        .square {
            width: 2rem;
            height: 2rem;
            border: 2px solid #fff;
            border-radius: 0.25rem;
        }

        .name {
            font-size: 1.2rem;
            font-weight: bold;
        }
        .description {
            ul {
                list-style: none;
                padding: 0;
                margin: 0;

                li {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    font-size: 16px;
                    color: #fff;

                    &::before {
                        content: "◊";
                        color: #fff;
                        font-size: 1rem;
                    }
                }
            }
        }
    }
}
</style>