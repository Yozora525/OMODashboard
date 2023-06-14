$(function(){
    // 按摩椅日常營運-單一地區 by shiyan
    // default data
    SetMultipleChart("[data-chart='massageChair']",['按摩椅1號','按摩椅2號','按摩椅3號','按摩椅4號','按摩椅5號'],[{
        type: 'bar',
        label: '電子支付收入(會員)',
        data: [3000,1600,1300,3100,3800],
        backgroundColor: "blue",
        borderWidth: 2,
        borderColor: '#124429',
    },
    {
        type: 'bar',
        label: '投幣收入(訪客)',
        data: [4000,2200,1700,3500,4000],
        backgroundColor: "orange",
        borderWidth: 0,
        borderColor: '#9B1B30',
    }],false,'bar',[['scales','y','grid','color']],['blue']);

    // change area
    $("[data-filter='area']").on("change", function() {
        let area = $("[data-filter='area']")[0].value;
        var massageChair = [];
        var revenueMem = [];
        var revenueNoMem = [];

        switch (area) {
            case '大潤發劉老店':
                massageChair = ['按摩椅1號','按摩椅2號','按摩椅3號','按摩椅4號','按摩椅5號'];
                revenueMem = [3000,1600,1300,3100,3800];
                revenueNoMem = [4000,2200,1700,3500,4000];
                break;

            case '家樂福劉老店':
                massageChair = ['按摩椅6號','按摩椅7號','按摩椅8號'];
                revenueMem = [6000,4300,8000];
                revenueNoMem = [3000,4000,4700];
                break;

            case '7-11劉老店':
                massageChair = ['按摩椅9號','按摩椅10號'];
                revenueMem = [6000,4000];
                revenueNoMem = [3000,2000];
                break;

            case '劉老辦公室':
                massageChair = ['按摩椅CYIM號'];
                revenueMem = [5000];
                revenueNoMem = [7000];
                break;
        
            default:
                break;
        }

        // set chart title
        $("[data-chart-title]")[0].textContent = '2023年6月份按摩椅營運狀況-' + area;

        // delete original element
        $("[data-chart='massageChair']")[0].remove();

        // create new element
        let massageChairChart = document.createElement('canvas');
        massageChairChart.dataset.chart = 'massageChair';
        massageChairChart.dataset.chartType = 'bar';
        $("[data-container='chart']")[0].appendChild(massageChairChart);

        SetMultipleChart("[data-chart='massageChair']",massageChair,[{
            type: 'bar',
            label: '電子支付收入(會員)',
            data: revenueMem,
            backgroundColor: "blue",
            borderWidth: 2,
            borderColor: '#124429',
        },
        {
            type: 'bar',
            label: '投幣收入(訪客)',
            data: revenueNoMem,
            backgroundColor: "orange",
            borderWidth: 0,
            borderColor: '#9B1B30',
        }],false,'bar',[['scales','y','grid','color']],['blue']);

    });
    


})