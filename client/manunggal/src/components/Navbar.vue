<script>
import { mapActions, mapState } from 'pinia';
import { useCounterStore } from '../stores/counter';

export default {
    data() {
        return {
            search: '',
            page: '1',
            genre: '',
            limit: 20,
        }
    },

    computed: {
        ...mapState(useCounterStore, ["isLogin"])
    },

    methods: {
        ...mapActions(useCounterStore, ['logout', 'getCampaigns']),
        buttonLogin() {
            this.$router.push('/login')
        },
        buttonLogout() {
            this.logout()
        },
        filterGenre() {
            const data = {
                search: this.search,
                page: this.page,
                genre: this.genre,
                limit: this.limit
            }
            this.getCampaigns(data)
        },
        buttonSearch() {
            const data = {
                search: this.search,
                page: this.page,
                genre: this.genre,
                limit: this.limit
            }
            this.getMovies(data)
        },
        buttonAll() {
            const data = {
                search: '',
                page: this.page,
                genre: '',
                limit: this.limit
            }
            this.getCampaigns(data)
        }
    }
}

</script>
<template>
    <nav class="mb-0 navbar navbar-expand-lg sticky-top"
        style="background-color:white; font-family:Verdana, Geneva, Tahoma, sans-serif">
        <div class="container-fluid">
            <div>
                <a @click.prevent="$router.push('/')" class="navbar-brand" href="#">
                    <img src="../assets/css/images/finalnavbar.png" style="width:133px height:38px">
                </a>
            </div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item mx-3" :style="$route.name === 'donation' ? 'background-color : #FCD375' : 'background-color:white'
                        ">
                        <a @click.prevent="$router.push('/donation')" class="nav-link " aria-current="page" href="#">DONASI
                        </a>
                    </li>
                    <li class="nav-item mx-3" @click.prevent="$router.push('/event')" :style="$route.name === 'event' ? 'background-color : #FCD375' : 'background-color:white'
                        ">
                        <a class="nav-link " href="#">EVENT</a>
                    </li>
                    <li class="nav-item dropdown mx-3" :style="$route.name === 'visi-misi' ? 'background-color : #FCD375' : 'background-color:white'
                        ">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            TENTANG
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" @click.prevent="$router.push('/tentang-kami/visi-misi')"
                                    href="#">VISI-MISI</a></li>
                            <hr class="dropdown-divider">
                            <li><a class="dropdown-item" @click.prevent="$router.push('/tentang-kami/legal')"
                                    href="#">LEGAL</a></li>
                            <hr class="dropdown-divider">
                            <li><a class="dropdown-item" @click.prevent="$router.push('/tentang-kami/kantor-layanan')"
                                    href="#">KANTOR LAYANAN</a></li>
                            <hr class="dropdown-divider">
                            <li><a class="dropdown-item" @click.prevent="$router.push('/tentang-kami/galery')"
                                    href="#">GALERY</a></li>
                            <hr class="dropdown-divider">
                            <li><a class="dropdown-item" @click.prevent="$router.push('/tentang-kami/company-profile')"
                                    href="#">COMPANY PROFILE</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" @click.prevent="$router.push('/tentang-kami/laporan')"
                                    href="#">LAPORAN</a></li>
                        </ul>
                    </li>
                    <li v-if="isLogin == false" class="nav-item mx-3" :style="$route.name === 'login' ? 'background-color : #FCD375' : 'background-color:white'
                        ">
                        <a @click.prevent="$router.push('/login')" class="nav-link active">MASUK</a>
                    </li>
                    <li v-if="isLogin == false" @click.prevent="$router.push('/register')" class="nav-item mx-3" :style="$route.name === 'register' ? 'background-color : #FCD375' : 'background-color:white'
                        ">
                        <button class="nav-link active">REGISTER</button>
                    </li>
                    <li v-else-if="isLogin == true" class="nav-item mx-3"
                        :style="$route.name === 'dashboard' ? 'background-color : #FCD375' : 'background-color:white'">
                        <a @click.prevent="$router.push('/dashboard')" class="nav-link active">DASHBOARD</a>
                    </li>
                </ul>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="search" aria-label="Search">
                    <a src="#" class="">
                        <span class="material-symbols-outlined mt-2">
                            search
                        </span>
                    </a>
                </form>
            </div>
        </div>
    </nav>
</template>
<style>
.nav-link {
    font-size: medium;
}
</style>