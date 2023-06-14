$(function(){
    // click massage chair chart.
    $("[data-container='massageChairChart']").on("click", function(){
        // open massage chair page in new tab
        window.open('/massagechair');
    });

    // ################################### chart ###################################
    // 按摩椅日常營運-全地區 by shiyan
    SetMultipleChart("[data-chart='massageChairAll']",['大潤發劉老店','家樂福劉老店','7-11劉老店','劉老辦公室'],[{
        type: 'bar',
        label: '地區總收入',
        data: [28200,30000,15000,12000],
        backgroundColor: "blue",
        borderWidth: 2,
        borderColor: '#124429',
    }],false,'bar',[['scales','y','grid','color']],['blue']);

    // todo 業務員業績及目標 by shiyan


    // todo 接觸點 by shiyan

    // ################################### chart ###################################

});