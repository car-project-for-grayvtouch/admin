<template>
    <div class="module-container">
        <module-nav :topRoute="topRoute" :pos="pos"></module-nav>
        <div class="module-content">
            <div class="in">
                <form @submit.prevent="submit">
                    <table class="input-tb">
                        <tbody>
                        <tr id="name" :class="getClass(error.name)">
                            <td>名称</td>
                            <td>
                                <input type="text" class="form-text" v-model="form.name">
                                <span class="necessary">*</span>
                                <span class="tip"></span>
                                <span class="msg">{{ error.name }}</span>
                            </td>
                        </tr>
                        <tr id="brand_id" :class="getClass(error.brand_id)">
                            <td>品牌</td>
                            <td>
                                <v-brand ref="brand" :brand="brand"></v-brand>
                                <span class="necessary">*</span>
                                <span class="tip"></span>
                                <span class="msg">{{ error.brand_id }}</span>
                            </td>
                        </tr>
                        <tr id="car_series_group_id" :class="getClass(error.car_series_group_id)">
                            <td>分组</td>
                            <td>
                                <i-select v-model="form.car_series_group_id" style="width: 300px">
                                    <i-option v-for="v in group" :key="v.id" :value="v.id">{{ v.name }}</i-option>
                                </i-select>
                                <span class="necessary">*</span>
                                <span class="tip"></span>
                                <span class="msg">{{ error.car_series_group_id }}</span>
                            </td>
                        </tr>
                        <tr id="weight" :class="getClass(error.weight)">
                            <td>权重</td>
                            <td>
                                <input type="number" step="0" class="form-text" v-model="form.weight">
                                <span class="necessary"></span>
                                <span class="tip">默认：0，仅允许输入整数</span>
                                <span class="msg">{{ error.weight }}</span>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <button type="submit" class="run-button run-button-submit">提交</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </div>
        <v-loading ref="loading"></v-loading>
    </div>
</template>

<script src="./js/carSeries.js"></script>
<style src="../public/css/global.css"></style>
<style scoped src="../public/css/public.css"></style>
<style scoped src="./css/carSeries.css"></style>