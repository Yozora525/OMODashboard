$(function(){
    var touchTime = [];
    $("[data-title]")[0].textContent = '專案編號 ' + touch + ' 接觸統計';
    switch (touch) {
        case 'P176593758139':
            touchTime = [5,4,1];
            break;

        case 'P176593776044':
            touchTime = [3,2,0];
            break;

        case 'P176593738561':
            touchTime = [2,1,1];
            break;
    
        default:
            break;
    }

    SetMultipleChart("[data-chart='touch']",['實體門市','公共按摩椅','展銷活動'],[{
        type: 'bar',
        label: '接觸次數',
        data: touchTime,
        backgroundColor: "blue",
        borderWidth: 2,
        borderColor: '#124429',
    }],false,'bar',[['scales','y','grid','color']],['blue']);
})