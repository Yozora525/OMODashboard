$(function(){
    // click massage chair chart. by shiyan
    $("[data-container='massageChairChart']").on("click", function(){
        // open massage chair page in new tab
        window.open('/massagechair');
    });

    // click table's project id . by shiyan
    $("[data-project-id]").on("click", function(){
        window.open('/touch?touch=' + this.textContent);
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

    // 業務員業績及目標 by shiyan
    SetMultipleChart("[data-chart='aim']",['業務員1','業務員2','業務員3','業務員4'],[{
        type: 'line',
        label: '當前業績',
        data: [16500,23700,33000,30000],
        backgroundColor: "blue",
        borderWidth: 2,
        borderColor: '#124429',
    },{
        type: 'bar',
        label: '業績目標',
        data: [28000,30000,31000,27000],
        backgroundColor: "yellow",
        borderWidth: 2,
        borderColor: '#124429',
    }],false,'bar',[['scales','y','grid','color']],['blue']);
    // ################################### chart ###################################

});