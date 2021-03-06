define(['template'], function (template) {
    function anonymous($data,$filename) {
        'use strict';
        $data=$data||{};
        var $utils=template.utils,$helpers=$utils.$helpers,$each=$utils.$each,dataSourcesList=$data.dataSourcesList,$item=$data.$item,$index=$data.$index,$escape=$utils.$escape,$out='';$out+='<div>\n    <div class="con-set-cube c-f">\n        <div class="con-data-sources-list f-l j-root-data-sources-list">\n            <div class="title fs-14">请选择数据源</div>\n            ';
        $each(dataSourcesList,function($item,$index){
        $out+=' <span\n                class="btn-has-icon btn-has-icon-data-sources data-line c-p j-item';
        if($item.selected===true){
        $out+=' selected';
        }
        $out+='"\n                data-id="';
        $out+=$escape($item.id);
        $out+='">';
        $out+=$escape($item.name);
        $out+='</span>\n            ';
        });
        $out+='\n            ';
        if(dataSourcesList.length == 0){
        $out+='\n            <div class="empty-data ta-c">\n                暂无数据源\n                <a class="create-data-sources-link c-p td-u j-create-data-sources-link">\n                    现在去创建数据源\n                </a>\n            </div>\n            ';
        }
        $out+='\n        </div>\n        <div class="con-cube-list f-l j-con-cube-list">\n            <div class="title fs-14">请选择要实用的数据表（可多选）</div>\n            <div class="empty-data ta-c">暂无数据表</div>\n        </div>\n    </div>\n    <div class="form-common-line ta-c">\n        ';
        if(dataSourcesList.length > 0){
        $out+='<span\n            class="button button-flat-primary j-submit">提交</span>';
        }
        $out+=' <span\n            class="button button-flat-primary j-cancel">取消</span>\n    </div>\n</div>';
        return $out;
    }
    return { render: anonymous };
});