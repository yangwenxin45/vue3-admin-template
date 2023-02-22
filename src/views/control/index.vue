<template>
    <div>hello isboyjc, This is toolsdog home page!</div>
    <el-row class="mb-4">
        <el-button>Default</el-button>
        <el-button type="primary">Primary</el-button>
        <el-button type="success">Success</el-button>
        <el-button type="info">Info</el-button>
        <el-button type="warning">Warning</el-button>
        <el-button type="danger">Danger</el-button>
    </el-row>
    <div>
        <el-icon>
            <i-ep-Edit />
        </el-icon>
        <!-- 或者独立使用它，不从父级获取属性 -->
        <IEpEdit />
        <el-icon><i-ep-Plus /></el-icon>
    </div>
</template>

<script setup>

</script>

<style scoped></style>