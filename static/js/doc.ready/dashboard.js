$(function(){
    // draw chart example
    SetMultipleChart("[data-chart='massageChair']",['按摩椅1號','按摩椅2號','按摩椅3號','按摩椅4號','按摩椅4號'],[{
        type: 'line',
        label: '電子支付金額',
        data: [3000,1600,1300,3100,3800],
        backgroundColor: "orange",
        borderWidth: 2,
        borderColor: '#124429',
    },
    {
        type: 'bar',
        label: '總金額',
        data: [4000,2200,1700,3500,4000],
        backgroundColor: "orange",
        borderWidth: 0,
        borderColor: '#9B1B30',
    }],false,'bar',[['scales','y','grid','color']],['blue']);



});