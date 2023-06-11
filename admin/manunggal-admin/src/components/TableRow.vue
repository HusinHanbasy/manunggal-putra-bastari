<script>


export default {
    emits: ["changeStatus", "deleteCampaign", "detailCampaign", "deleteCategory"],
    props: ["cols", "data", "index"],
    data() {
        return {
            role: localStorage.getItem("role")
        }
    }
}
</script>

<template>
    <tr>
        <td v-for="item in cols" :key="item" class="justify-center text-center m-0">
            <img v-if="item == 'imageUrl'" :src="data.imageUrl" alt="image" style=" width: 80px; height: 80px " />
            <p v-else-if="item == 'no'" class="text-sm font-bold mb-0">{{ index + 1 }} </p>
            <p v-else-if="item == 'authorId'" class="text-sm font-weight-normal mb-0">{{ data.User?.username }} </p>
            <p v-else-if="item == 'categoryId'" class="text-sm font-weight-normal mb-0">{{ data.Category?.name }} </p>
            <p v-else-if="item == 'action'" class="text-sm font-weight-normal mb-0">
                <a class="link me-3" href="#" @click.prevent="$emit('campaignById', data.id)"><span
                        class="material-symbols-outlined">
                        edit
                    </span></a>
                <a class="link" href="#" @click.prevent="$emit('deleteCampaign', data.id)"><span
                        class="material-symbols-outlined">
                        delete
                    </span></a>
            </p>
            <p v-else-if="item == '#'" class="text-sm font-weight-normal mb-0 m-0">
                <a class="link" href="#" @click.prevent="$emit('deleteCategory', data.id)"><span
                        class="material-symbols-outlined">
                        delete
                    </span></a>
            </p>
            <select v-else-if="item == 'status'" class="form-control" v-model="data.status"
                @change="$emit('changeStatus', data.id, data.status)">
                <option value="Active" v-show="data.status !== 'Active'">Active</option>
                <option value="Inactive" v-show="data.status !== 'Inactive'">Inactive</option>
                <option value="Archived" v-show="data.status !== 'Archived'">Archived</option>
            </select>


            <p v-else class="text-sm font-weight-normal mb-0">{{ data[item] }}
            </p>

        </td>
    </tr>
</template>