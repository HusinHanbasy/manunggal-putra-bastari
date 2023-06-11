<script>
export default {
    emits: ["submit", "cancel"]
}
</script>

<template>
    <div class="row mt-5 mb-3">
        <div class="col-6">
            <a @click.prevent="$router.push('/campaign')" class="btn btn-lg btn-light rounded-pill w-100 p-2"
                id="cancel-product">Cancel
            </a>
        </div>
        <div class="col-6">
            <button @click.prevent="$emit('submit')" class="btn btn-lg btn-primary rounded-pill w-100 p-2"
                type="submit">Submit</button>
        </div>
    </div>
</template>