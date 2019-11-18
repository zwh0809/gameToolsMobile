
// 特殊字符检查
export function speCharCheck(str){
    var regEn = /[`~!@#$%^&*()_+-<>?:"{},.\/;'[\]]/im,
    regCn = /[·！#￥（——）：；“-”‘、，|《。》？、【】[\]]/im;
    console.log(regEn.test(str),regCn.test(str))
    if(regEn.test(str) || regCn.test(str)) {
        Message({
            message:'不能存在特殊字符！',
            type:'warning',
        })
        return false;
    }else{
        return true;
    }
}
// 只能包含数字与字符
export function lg_cn_Check(str){
    let regCn = /^[0-9\u4e00-\u9fa5]+$/;
    console.log(regCn.test(str),'str',regCn)
    if(!regCn.test(str)){
        return false;
    }else{
        return true;
    }
}
// 只能包含数字与英文
export function lg_en_Check(str){
    let regEn = /^[0-9a-z]+$/;
    console.log(regEn.test(str),'str',regEn)
    if(!regEn.test(str)){
        return false;
    }else{
        return true;
    }
}
// 版本号检测
export function versionCheck(str){
    let regEn = /^[0-9.v]+$/;
    if(str[0]==='v'){
        if(!regEn.test(str)){
            return false;
        }else{
            return true;
        }
    }else{
        return false;
    }
}

// 只能包含中文
export function onlyCnCheck(str){
    let regCn = /^[\u4e00-\u9fa5]+$/;
    console.log(regCn.test(str),'str',regCn)
    if(!regCn.test(str)){
        return false;
    }else{
        return true;
    }
}
// 两位小数
export function onlywonum(str){
    let regCn = /^-?\d+\.?\d{0,2}$/;
    console.log(regCn.test(str),'str',regCn)
    if(!regCn.test(str)){
        return false;
    }else{
        return true;
    }
}
// 过滤，替换字符
export function strFilter(str){
    str = str.replace(/，/g,'，');
    str = str.replace(/!/g,'！');
    str = str.replace(/；/g,';');
    str = str.replace(/;/g,'');
    // str = str.replace(/。/g,'。');
    return str;
}
// QA数据导出格式 [{'plotNum': '1-1','question': '你是谁？','npc': '汤姆','mood': '开心','answer':'我是杰瑞',}]
export function  trimExcel(list,plotId){
    let porps = {},Sheets = {};
    if(plotId){
        // -------------------------------------plotId存在为全局问答，否则为剧情问答--------------------
        porps = {'plotNum': 'A',
                'question': 'B',
                'npc': 'C',
                'mood': 'D',
                'answer':'E',
            };
        // ---------------------------------------制作一个表头格式的数据--------------------------------
        Sheets = {sheetsName:{
                    A1:{t:'s',v:'剧情编号'},
                    B1:{t:'s',v:'问题'},
                    C1:{t:'s',v:'角色'},
                    D1:{t:'s',v:'语气'},
                    E1:{t:'s',v:'回答'},
                }}
    }else{
        // -------------------------------------plotId存在为全局问答，否则为剧情问答--------------------
        porps = {
                'question': 'A',
                'npc': 'B',
                'mood': 'C',
                'answer':'D',
            };
        // ---------------------------------------制作一个表头格式的数据--------------------------------
        Sheets = {sheetsName:{
                A1:{t:'s',v:'问题'},
                B1:{t:'s',v:'角色'},
                C1:{t:'s',v:'语气'},
                D1:{t:'s',v:'回答'},
            }}
    }
    // ---------------------------------------从第二列开始添加内容--------------------------------------
    console.log(list, '要导出的数据')
    for(let i in list){
      let num = 2;
      for(let j in list[i]){
          console.log(j, '键名')
        Sheets.sheetsName[porps[j]+(parseInt(i)+2)] = {t:'s',v:list[i][j]}
        num++;
      }
    }
    return Sheets;
  }