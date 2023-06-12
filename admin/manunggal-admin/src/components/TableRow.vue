<script>


export default {
    emits: ["changeStatus", "deleteCampaign", "detailCampaign", "deleteCategory", "deleteStatus"],
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
            <p v-else-if="item == 'userId'" class="text-sm font-weight-normal mb-0">{{ data.User?.username }} </p>
            <p v-else-if="item == 'campaign'" class="text-sm font-weight-normal mb-0">{{ data.Campaign?.title }} </p>
            <p v-else-if="item == 'category'" class="text-sm font-weight-normal mb-0">{{ data.Category?.name }} </p>
            <p v-else-if="item == 'status'" class="text-sm font-weight-normal mb-0">{{ data.Status?.name }} </p>
            <p v-else-if="item == 'action'" class="text-sm font-weight-normal mb-0">

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
            <p v-else-if="item === '##'" class="text-sm font-weight-normal mb-0 m-0">
                <a class="link" href="#" @click.prevent="$emit('deleteStatus', data.id)"><span
                        class="material-symbols-outlined">
                        delete
                    </span></a>
            </p>
            <p v-else class="text-sm font-weight-normal mb-0">{{ data[item] }}
            </p>

        </td>
    </tr>
</template>