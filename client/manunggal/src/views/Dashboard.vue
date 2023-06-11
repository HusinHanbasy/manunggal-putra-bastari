<script>
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/counter";
import Sidebar from "../components/Sidebar.vue";

export default {
    components: {
        Sidebar
    },
    computed: {
        ...mapState(useCounterStore, ["isLogin", "myCampaign", "myDonation", "getDana"])
    },
    methods: {
        ...mapActions(useCounterStore, ["logout"]),
        handleLogout() {
            this.logout()
        }
    },
}
</script>

<template>
    <div class="wrapper">
        <!-- Sidebar  -->
        <nav id="sidebar">
            <div class="sidebar-header">
                <h3>USER PROFILE</h3>
            </div>

            <ul class="list-unstyled components mb-5">
                <li>
                    <a href="#" @click.prevent="$router.push('/')" data-toggle="collapse" aria-expanded="false"
                        class="toggle"><span class="material-symbols-outlined">
                            home
                        </span> Home</a>
                </li>
                <li>
                    <a href="#" data-toggle="collapse" aria-expanded="false" class="toggle">
                        <span class="material-symbols-outlined">
                            dashboard
                        </span> Dashboard</a>
                </li>
                <li>
                    <a href="#"> <span class="material-symbols-outlined">
                            campaign
                        </span> Program Campaign</a>
                </li>
                <li>
                    <a href="#"><span class="material-symbols-outlined">
                            payments
                        </span> Pencairan Dana</a>
                </li>
            </ul>

            <ul class="list-unstyled CTAs mt-5">
                <li>
                    <a href="#" @click.prevent="handleLogout" style="font-size: 10px;" class="download mt-5 mb-3"><span
                            class="material-symbols-outlined">
                            logout
                        </span> KELUAR</a>
                </li>
                <li>
                    <a href="#" @click.prevent="$router.push('/')" class="article btn">MULAI DONASI</a>
                </li>
            </ul>
        </nav>

        <!-- Page Content  -->
        <div id="content">
            <div class="bg-blend-darken">
                <div class="container-fluid ">
                    <div class="row">
                        <div class="col-sm-4 col-12 mb-xl-0">
                            <div class="card border-5 shadow rounded mb-4 h-100">
                                <div class="card-body text-start w-100">
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="w-100">
                                                <p class="text fs-4 text-dark text-center mb-4">TOTAL DONASI</p>
                                                <h1 class="mb-0 font-weight-bold text-center">Rp 0</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4 col-12 mb-xl-0">
                            <div class="card border-5 shadow rounded mb-4 h-100">
                                <div class="card-body text-start w-100">
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="w-100">
                                                <p class="text fs-4 text-dark mb-4 text-center">TOTAL CAMPAIGN</p>
                                                <h1 class="mb-0 font-weight-bold text-center">0</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4 col-12 mb-xl-0">
                            <div class="card border-5 shadow rounded mb-4 h-100">
                                <div class="card-body text-start w-100">
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="w-100">
                                                <p class="text fs-4 text-dark mb-4 text-center">TOTAL
                                                    PENCAIRAN DANA</p>
                                                <h1 class="mb-0 font-weight-bold text-center">Rp 0</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card border-0 shadow-xs mb-4">
                        <div class="mx-3 p-3">
                            <h2 class="fs-3 justify-center text-center" style="color:#35260cfd;">
                                Donasi 1 Minggu Terakhir</h2>
                        </div>
                        <div>
                            <table class="table border-0">
                                <thead>
                                    <tr style="background-color:#fdb823fd; color:white;">
                                        <th class="p-3">Tanggal</th>
                                        <th class="p-3">Jumlah Donasi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>01-Juni-2023</td>
                                        <td>0</td>
                                    </tr>
                                    <tr class="table-secondary">
                                        <td>31-Mei-2023</td>
                                        <td>0</td>
                                    </tr>
                                    <tr>
                                        <td>30-Mei-2023</td>
                                        <td>0</td>
                                    </tr>
                                    <tr class="table-secondary">
                                        <td>29-Mei-2023</td>
                                        <td>0</td>
                                    </tr>
                                    <tr>
                                        <td>28-Mei-2023</td>
                                        <td>0</td>
                                    </tr>
                                    <tr class="table-secondary">
                                        <td>27-Mei-2023</td>
                                        <td>0</td>
                                    </tr>
                                    <tr>
                                        <td>26-Mei-2023</td>
                                        <td>0</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
/*
    DEMO STYLE
*/

@import "https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700";

body {
    font-family: 'Poppins', sans-serif;
    background: #fafafa;
}

.table-color {
    background-color: #705109;
    color: white;
}

th {
    justify-content: center;
    text-align: center;
    font-size: 20px;
}

td {
    font-size: 20px;
    justify-content: center;
    text-align: center;
}

p {
    font-family: 'Poppins', sans-serif;
    font-size: 1.1em;
    font-weight: 300;
    line-height: 1.7em;
    color: #999;
}

a,
a:hover,
a:focus {
    color: inherit;
    text-decoration: none;
    transition: all 0.3s;
}

.navbar {
    padding: 15px 10px;
    background: #fff;
    border: none;
    border-radius: 0;
    margin-bottom: 40px;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
}

.navbar-btn {
    box-shadow: none;
    outline: none !important;
    border: none;
}

.line {
    width: 100%;
    height: 1px;
    border-bottom: 1px dashed #ddd;
    margin: 40px 0;
}

/* ---------------------------------------------------
    SIDEBAR STYLE
----------------------------------------------------- */

.wrapper {
    display: flex;
    width: 100%;
    align-items: stretch;
}

#sidebar {
    min-width: 250px;
    max-width: 250px;
    background: #ececeb;
    color: #FCD375;
    transition: all 0.3s;
}

#sidebar.active {
    margin-left: -250px;
}

#sidebar .sidebar-header {
    font-size: medium;
    padding: 20px;
    background: #000000;
}

#sidebar ul.components {
    padding: 20px 0;
    border-bottom: 1px solid #ececeb;
    font-size: medium;
}

#sidebar ul p {
    color: #fff;
    padding: 10px;
}

#sidebar ul li a {
    padding: 10px;
    font-size: 1.1em;
    display: block;

}

#sidebar ul li a:hover {
    color: #FCD375;
    background: #fff;
}

#sidebar ul li.active>a,
a[aria-expanded="true"] {
    color: #fff;
    background: #FCD375;
}

a[data-toggle="collapse"] {
    position: relative;
}

.dropdown-toggle::after {
    display: block;
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
}

ul ul a {
    font-size: 0.9em !important;
    padding-left: 30px !important;
    background: #FCD375;
}

ul.CTAs {
    padding: 20px;
}

ul.CTAs a {
    text-align: center;
    font-size: 0.9em !important;
    display: block;
    border-radius: 5px;
    margin-bottom: 5px;
}

a.download {
    background: #fff;
    color: #13110d;
}

a.article,
a.article:hover {
    background: #2c7943 !important;
    color: #fff !important;
}

/* ---------------------------------------------------
    CONTENT STYLE
----------------------------------------------------- */

#content {
    width: 100%;
    padding: 20px;
    min-height: 100vh;
    transition: all 0.3s;
}

/* ---------------------------------------------------
    MEDIAQUERIES
----------------------------------------------------- */

@media (max-width: 768px) {
    #sidebar {
        margin-left: -250px;
    }

    #sidebar.active {
        margin-left: 0;
    }

    #sidebarCollapse span {
        display: none;
    }
}
</style>