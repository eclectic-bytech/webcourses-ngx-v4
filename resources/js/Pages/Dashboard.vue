<template>
    <app-layout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Dashboard
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                    <!-- <welcome /> -->
                    <div class="grid grid-cols-2">
                        <div class="p-6 text-center my-auto" style="color:darkslategrey;">
                            <div class="text-2xl">
                                Welcome to <span class="font-semibold">learning anywhere</span> on the
                                <a href="https://www.webcourses.io">
                                    <span style="color:#f59e0b;" class="font-semibold uppercase">webcourses.io</span>&nbsp;Platform.
                                </a>
                            </div>
                            <p class="mt-5" style="color:black;">We're glad you're here.</p>
                        </div>
                        <div class="p-6">
                            <img class="max-w-full h-auto rounded-full" src="/images/my-webcourses.png">
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </app-layout>
</template>

<script>
    import AppLayout from '@/Layouts/AppLayout'
    import Welcome from '@/Jetstream/Welcome'

    export default {
        components: {
            AppLayout,
            Welcome,
        },
    }
</script>
