<template>
    <el-row>
        <el-col :span="12">
        <div class="small">
            <canvas id="myChart2" width="400px" height="400px"></canvas>
        </div>
        </el-col>
        <el-col :span="12">
            <counter></counter>
            <counter></counter>
        </el-col>
    </el-row>
</template>
<script>
import Chart from 'chart.js';
import Counter from '@/components/layout/counter'

export default {
    name: 'chartjs',
    components: {
        Counter
    },
    data() {
        return {
            chart_data: [],
            type: "bar",
            counter: 0
        }
    },
    mounted() {
        this.chart_data = this.funcrandam();
        var ctx2 = document.getElementById("myChart2");
        var myChart2 = new Chart(ctx2, {
            type: this.type,//type属性表示图形形状：line:线、bar:柱状、
            data: { //data属性表示图形的数据。
                labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                datasets: [
                    {
                        label: "source 1",
                        backgroundColor: "rgba(225,10,10,0.3)",
                        borderColor: "rgba(225,103,110,1)",
                        borderWidth: 1,
                        pointStrokeColor: "#fff",
                        pointStyle: "crossRot",
                        data: this.chart_data,
                        cubicInterpolationMode: "monotone",
                        spanGaps: "false",
                        fill: "true"
                    }
                ]
            },
            options: {
                
            }

        });
    },
    methods: {
        //选项（methods、computed、watch、props、components）不应该使用箭头函数。
        funcrandam: function(){
            let randam_list = [];
            for (let index=0; index<13; index++){
                let num = Math.ceil(Math.random()*100);//Math.ceil：向上取整
                randam_list.push(num);
            }
            return randam_list;
        }
    }
}
</script>
<style>
.el-row {
    margin-bottom: 20px;
}

.small {
    width: 500px;
    height: 500px;
}
</style>