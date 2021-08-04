<template>
    <div class="footer">
        <div class="infom">
            <a href="javascript:;">Hide the sword pro</a>
            <span class="el-icon-eleme"></span>
            <a href="javascript:;">Hide the sword</a>
        </div>
        <p>
            2020 藏剑山庄技术部出品
        </p>
    </div>
</template>

<script>
export default {
    name:"MiniFooter"
}
</script>

<style scoped>
    a{
        text-decoration: none;
    }
    .footer{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 70px auto;
        margin-bottom: 10px;
        color: rgb(132,133,135);
    }
    .footer a {
        color: rgb(132,133,135);
    }
    .footer a:hover{
        color: black;
    }
    .footer .infom{
        width: 320px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        margin-bottom: 6px;
    }
    .footer .github{
        width: 12px;
        height: 12px;
        cursor: pointer;
    }
    .footer .github:hover{
        color: black;
    }
</style>