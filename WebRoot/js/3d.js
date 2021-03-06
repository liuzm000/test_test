/**
 * 定义array删除元素方法
 * @param dx
 * @returns {Boolean}
 */
Array.prototype.remove=function(dx) 
{ 
    if(isNaN(dx)||dx>this.length){return false;} 
    for(var i=0,n=0;i<this.length;i++) 
    { 
        if(this[i]!=this[dx]) 
        { 
            this[n++]=this[i];
        } 
    } 
    this.length-=1;
};
////////////////////////////
var Lottery={
		TotalInvestNum:0,//总投注数
		TotalMoney:0,//总金额
		TotalMultiple: 1, //总倍数
        MaxAllowInvestMultiple: 999, //允许投注的最大倍数,默认999倍
        LotteryNumber: "", //投注号码
        Copies:1,//份数
		GuaranteeAmount:0,//保底金额
		SelectGroupHunting :"#pl_groupHunting",
		zhuiHaoTotal:0,//追号总金额
		PlayTypeID:0,//投注选号类型
		investNum:1,//每次投注数
		typeName:"单选",//具体玩法  如：单选，组三 ，组六
        /**
    	 * 单选--确认选号
    	 */
        danXuan:function (obj){
        		var danxuanType = $('input:radio[name=danxuan]:checked').val();//单选类型。： 普通或者单式上传
        		var baiWei=new Array();//百位选中的数字
        		var shiWei=new Array();//十位选中的数字
        		var geWei=new Array();//个位选中的数字
        		$pailie_choose_numwrap = $(obj).parent().parent().find(".pailie_choose_numwrap");
        		this.investNum = this.GetLotteryInvestNum($pailie_choose_numwrap,baiWei,shiWei,geWei);
        		var  lottery =  this.saveLotteryNumber($pailie_choose_numwrap,baiWei,shiWei,geWei);
        		console.log(this.investNum);
        		if(this.investNum==0){
        			toast("请投注号码");return false;
        		}
        		//清空已选号码
        		$pailie_choose_numwrap.children("li").find(".pailie_num_bit").find(">ol li").removeClass("curr");
        		var lotteryCount=0;//总金额
        		lotteryCount=this.investNum*2;
        		var lotteryHtml  ="<li title=\""+lottery+" ["+this.investNum+"注，"+lotteryCount+"元]\">	<span>" +
        				"<a class=\"touzhu-del\" href=\"javascript:;\" id=\"lotteryInfo\" lotteryType=\""+this.typeName+"\" rel=\""+lottery+"\"  name=\""+this.investNum+"\" dir=\""+lotteryCount+"\">删除</a></span>	" +
        						"<b>"+this.typeName+"&nbsp;&nbsp;</b><i>"+lottery+"</i>&nbsp;&nbsp;["+this.investNum+"注，"+lotteryCount+"元]  </li>";
        		$(".touzhu_conlist>ul").prepend(lotteryHtml);
        		//总注数累加
        		Lottery.TotalInvestNum=Lottery.TotalInvestNum+this.investNum;
        		//总金额累加
        		Lottery.TotalMoney=Lottery.TotalMoney+lotteryCount;
        		
        		Lottery.deleteLottery();
        		Lottery.numberLottery();
        		CommonInit.inithemai();
				$(".zhuihaoyuan").text(Lottery.TotalMoney+".00");//追号 中的每期金额
				this.clearMunberLottery($(obj));
        		if("danshi"==danxuanType){//单选类型。：单式上传
        			
        		}
        	},
        	init:function(){//初始化选球点击效果
        		 //选球点击选中
        	    $(".pailie_num_bit").children("ol").children("li").bind('click', function () {
        	    	Lottery.initMunberLottery($(this).parent().parent().parent().parent().parent());
        	    });
        	    //绑定13种彩种的确认选号效果
        	    $(".confirm_but").on("click",function(){
        	    	Lottery.danXuan(this);
        	    });
        	},
        	deleteLottery:function(){//删除注数
        		$(".touzhu-del").unbind().on("click", function(){
        			var investNum = $(this).attr("name");
        			var lotteryCount = $(this).attr("dir");
        			//删除操作  总注数和总金额 相减
        			Lottery.TotalInvestNum=Lottery.TotalInvestNum-investNum;
        			Lottery.TotalMoney=Lottery.TotalMoney-lotteryCount;
        			$(this).parent().parent().remove();
        			Lottery.numberLottery();
        		});
        	},
        	initMunberLottery:function(obj){//初始化选中的注数和金额
        		var danxuan_show = obj.parent().parent().find(".info_confirm");
        		console.log(danxuan_show);
        		var investNum=1;//总投注数
//    	    	$(obj).find(".pailie_num_bit").each(function () {
//    	            investNum *= $(this).find("ol").find("li.curr").length;
//    	        });
        		investNum = this.GetLotteryInvestNum($(obj));
    	    	 danxuan_show.find("i:first").html(investNum);//展示总注数
 	            danxuan_show.find("i").eq(1).html(investNum*2);//展示总金额
        	},
        	clearMunberLottery:function(obj){//清空展示的注数和金额
        		var danxuan_show = obj.parent().parent().find(".info_confirm");
        		var investNum=0;
    	    	 danxuan_show.find("i:first").html(investNum);//展示总注数
 	            danxuan_show.find("i").eq(1).html(investNum*2);//展示总金额
        	},
        	numberLottery:function(){//计算已购注数
    			var $rnum1 = $(".lde-rnum1"),
    			$rnum2 = $(".lde-rnum2");
    			$rnum1.text(Lottery.TotalInvestNum);
    			$rnum2.text(Lottery.TotalMoney);
    			CommonInit.initZhuiHaoTotal();
    			
        	},
        	
        	inithemai:function(){//添加投注数字实时修改  购买方式--》发起合买--》我要认购和我要保底的金额
        		var totalMoney = Lottery.TotalMoney*Lottery.TotalMultiple; //投注总金额=总倍数*总金额
				var minTotalMoney=parseInt(totalMoney/10);//最少认购金额比例=投注总金额 10%
				$("#buyshare").val(minTotalMoney);
				$("#minTotalMoney").text(minTotalMoney);
				$("#minTotalAmount").text(minTotalMoney+".00");
				$("#maxAssureshare").text(totalMoney-minTotalMoney);//最多保底份数
				
				
        	},
        	GetSelectedBallCount: function (obj) { //取选中的个数
                return $(obj).find("ol").find("li.curr").length;
            },
            GetLotteryInvestNum: function (pailie_choose_numwrap) {//获取注数
                var investNum = 0;
                switch (this.PlayTypeID) {
                    case 0: //普通投注-取注数
                    	investNum=1;
                    	pailie_choose_numwrap.children("li").find(".pailie_num_bit").each(function () {
            				var num = $(this).find("ol").find("li.curr").length;
                					investNum *= num;
                    	});
                        break;
                    case 1: //组选 组三//组六
                        var count = 1;
                        var zuxuanType=$("input[name='zuxuan']:checked").attr("id");
                        pailie_choose_numwrap.children("li").find(".pailie_num_bit").each(function () {
            				var num = $(this).find("ol").find("li.curr").length;
            				if(num!=0&&!typeof(num) !=("undefined")){
            					count *= num;
            				}
                    	});
                        if(zuxuanType=="bet_3d_21"){//组三
                        	 if (count < 2)
                                 investNum = 0;
                             else if (count == 2)
                                 investNum = 2;
                             else
                                 investNum = this.Combination(count, 2) * 2;
                        }
                        if(zuxuanType=="bet_3d_22"){//组六
                        	 if (count > 2) {
                                 investNum = this.Combination(count, 3);
                             }
                        }
                        break;
                    case 2: //1D
                    	investNum=0;
                    	pailie_choose_numwrap.children("li").find(".pailie_num_bit").each(function () {
            				var num = $(this).find("ol").find("li.curr").length;
                					investNum += num;
                    	});
                        break;
                    case 3://猜1D
                    	investNum=0;
                    	pailie_choose_numwrap.children("li").find(".pailie_num_bit").each(function () {
            				var num = $(this).find("ol").find("li.curr").length;
                					investNum += num;
                    	});
                        break;
                    case 4://2D
                    	  investNum = 0;
                          var count = 1;
                        	  pailie_choose_numwrap.children("li").find(".pailie_num_bit").each(function () {
                  				var num = $(this).find("ol").find("li.curr").length;
                  					count *= num;
                          	});
                        		console.log(count);
                          var numOne = 0;
                          var numTwo = 0;
                          var numThree = 0;
                          if (count > 1) {
                        	  pailie_choose_numwrap.children("li").find(".pailie_num_bit").each(function (i) {
                                  var value = $(this).find("ol").find("li.curr").length;
                                  if (i == 0)
                                      numOne = value;
                                  else if (i == 1)
                                      numTwo = value;
                                  else
                                      numThree = value;
                              });
                              investNum = numOne * numTwo + numOne * numThree + numTwo * numThree;
                          }
                        break;
                    case 5://猜2D
                    	var zuxuanType=$("input[name='betcai2d']:checked").attr("id");
                    	if(zuxuanType=="bet_3d_61"){//两同号
                    		pailie_choose_numwrap.children("li").find(".pailie_num_bit").each(function () {
                 				var num = $(this).find("ol").find("li.curr").length;
                 				investNum += num;
                         	});
                    	}
                    	 if(zuxuanType=="bet_3d_62"){//两不同号
                    		 var count = 1;
                       	  		pailie_choose_numwrap.children("li").find(".pailie_num_bit").each(function () {
                       	  			var num = $(this).find("ol").find("li.curr").length;
                       	  			if(num!=0&&!typeof(num) !=("undefined")){
                       	  				count *= num;
                       	  			}
                       	  		});
                       	  		console.log(count);
                             if (count >= 2) {
                                 investNum = this.Combination(count, 2);
                                 
                             }
                         }
                    	 
                        break;
                    case 6://通选
                    	investNum=1;
                    	pailie_choose_numwrap.children("li").find(".pailie_num_bit").each(function () {
            				var num = $(this).find("ol").find("li.curr").length;
                					investNum *= num;
                    	});
                    	break;
                    case 7://合数
                    	pailie_choose_numwrap.children("li").find(".pailie_num_bit").each(function () {
            				var num = $(this).find("ol").find("li.curr").length;
                					investNum += num;
                    	});
                    	break;
                    case 8://包选
                    	pailie_choose_numwrap.children("li").find(".pailie_num_bit").each(function () {
            				var num = $(this).find("ol").find("li.curr").length;
                					investNum += num;
                    	});
                    	break;
                    case 9://猜大小
                    	pailie_choose_numwrap.children("li").find(".pailie_num_bit").each(function () {
            				var num = $(this).find("ol").find("li.curr").length;
                					investNum += num;
                    	});
                    	break;
                    case 10://猜三同
                    	pailie_choose_numwrap.children("li").find(".pailie_num_bit").each(function () {
            				var num = $(this).find("ol").find("li.curr").length;
                					investNum += num;
                    	});
                    	break;
                    case 11://拖拉机
                    	pailie_choose_numwrap.children("li").find(".pailie_num_bit").each(function () {
            				var num = $(this).find("ol").find("li.curr").length;
                					investNum += num;
                    	});
                    	
                    	break;
                    case 12://猜奇偶
                    	pailie_choose_numwrap.children("li").find(".pailie_num_bit").each(function () {
            				var num = $(this).find("ol").find("li.curr").length;
                					investNum += num;
                    	});
                    	break;
                }
                return investNum;
            },
            Combination: function (m, n) { //算组合数，m中取n
                if (m == 0 || m < n) return 0;
                var investNum = 1;
                for (var i = m; i > n; i--) {
                    investNum *= i;
                }
                var f = 1;
                for (var i = m - n; i > 0; i--) {
                    f *= i;
                }

                return investNum /= f;
            },
            saveLotteryNumber:function(pailie_choose_numwrap,baiWei,shiWei,geWei){//保存选择的投注号码  用array存储
            	var  lottery="";
            	switch (this.PlayTypeID) {
                case 0: //普通投注-取注数
                	this.typeName="单选";
                	pailie_choose_numwrap.children("li").each(function(i,item){//百位、十位、个位  <li>
    					$(this).find(".pailie_num_bit").each(function(){//分别迭代到百位一行  十位一行  个位一行数字
    						$(this).find("li.curr").each(function(){//分别迭代到百位一行中的十个数字  十位一行的十个数字  个位一行的十个数字
    								if(i==0){//百位
    									baiWei.push($(this).text());
    								}
    								if(i==1){//十位
    									shiWei.push($(this).text());
    								}
    								if(i==2){//个位
    									geWei.push($(this).text());
    								}
    						});
    					});
            		});	
                	lottery= baiWei.join("")+Constant.g+shiWei.join("")+Constant.g+geWei.join("");//购买详细
                    break;
                case 1: //组选 组三//组六
                	var zuxuanType=$("input[name='zuxuan']:checked").attr("id");
                    pailie_choose_numwrap.children("li").each(function(i,item){//百位、十位、个位  <li>
    					$(this).find(".pailie_num_bit").each(function(){//分别迭代到百位一行  十位一行  个位一行数字
    						$(this).find("li.curr").each(function(){//分别迭代到百位一行中的十个数字  十位一行的十个数字  个位一行的十个数字
    								if(i==0){//百位
    									baiWei.push($(this).text());
    								}
    								if(i==1){//十位
    									shiWei.push($(this).text());
    								}
    						});
    					});
            		});	
                    if(zuxuanType=="bet_3d_21"){//组三
                    	this.typeName="组选三";
                    	lottery= baiWei.join(Constant.g);//购买详细
                    }
                    if(zuxuanType=="bet_3d_22"){//组六
                    	this.typeName="组选六";
                    	lottery= shiWei.join(Constant.g);//购买详细
                    }
                    break;
                case 2: //1D
                	this.typeName="1D";
                	pailie_choose_numwrap.children("li").each(function(i,item){//百位、十位、个位  <li>
    					$(this).find(".pailie_num_bit").each(function(){//分别迭代到百位一行  十位一行  个位一行数字
    						$(this).find("li.curr").each(function(){//分别迭代到百位一行中的十个数字  十位一行的十个数字  个位一行的十个数字
    								if(i==0){//百位
    									baiWei.push($(this).text());
    								}
    								if(i==1){//十位
    									shiWei.push($(this).text());
    								}
    								if(i==2){//个位
    									geWei.push($(this).text());
    								}
    						});
    					});
            		});	
                	if(baiWei.length==0){
                		baiWei.push("*");
                	}
                	if(shiWei.length==0){
                		shiWei.push("*");
                	}
                	if(geWei.length==0){
                		geWei.push("*");
                	}
                	lottery= baiWei.join("")+Constant.g+shiWei.join("")+Constant.g+geWei.join("");//购买详细
                    break;
                case 3://猜1D
                	this.typeName="猜1D";
                    pailie_choose_numwrap.children("li").each(function(i,item){//百位、十位、个位  <li>
    					$(this).find(".pailie_num_bit").each(function(){//分别迭代到百位一行  十位一行  个位一行数字
    						$(this).find("li.curr").each(function(){//分别迭代到百位一行中的十个数字  十位一行的十个数字  个位一行的十个数字
    								if(i==0){//百位
    									baiWei.push($(this).text());
    								}
    						});
    					});
            		});	
                    	lottery= baiWei.join(Constant.g);//购买详细
                    break;
                case 4://2D
                	this.typeName="2D";
                	pailie_choose_numwrap.children("li").each(function(i,item){//百位、十位、个位  <li>
    					$(this).find(".pailie_num_bit").each(function(){//分别迭代到百位一行  十位一行  个位一行数字
    						$(this).find("li.curr").each(function(){//分别迭代到百位一行中的十个数字  十位一行的十个数字  个位一行的十个数字
    								if(i==0){//百位
    									baiWei.push($(this).text());
    								}
    								if(i==1){//十位
    									shiWei.push($(this).text());
    								}
    								if(i==2){//个位
    									geWei.push($(this).text());
    								}
    						});
    					});
            		});	
                	lottery= baiWei.join("")+Constant.g+shiWei.join("")+Constant.g+geWei.join("");//购买详细
                    break;
                case 5://猜2D
                	var zuxuanType=$("input[name='betcai2d']:checked").attr("id");
                    pailie_choose_numwrap.children("li").each(function(i,item){//百位、十位、个位  <li>
    					$(this).find(".pailie_num_bit").each(function(){//分别迭代到百位一行  十位一行  个位一行数字
    						$(this).find("li.curr").each(function(){//分别迭代到百位一行中的十个数字  十位一行的十个数字  个位一行的十个数字
    								if(i==0){//百位
    									baiWei.push($(this).text());
    								}
    								if(i==1){//十位
    									shiWei.push($(this).text());
    								}
    						});
    					});
            		});	
                    if(zuxuanType=="bet_3d_61"){//两同号
                    	this.typeName="猜2D两同号";
                    	lottery= baiWei.join(Constant.g);//购买详细
                    }
                    if(zuxuanType=="bet_3d_62"){//两不同号
                    	this.typeName="猜2D两不同号";
                    	lottery= shiWei.join(Constant.g);//购买详细
                    }
                	break;
                case 6://通选
                	this.typeName="通选";
                	pailie_choose_numwrap.children("li").each(function(i,item){//百位、十位、个位  <li>
    					$(this).find(".pailie_num_bit").each(function(){//分别迭代到百位一行  十位一行  个位一行数字
    						$(this).find("li.curr").each(function(){//分别迭代到百位一行中的十个数字  十位一行的十个数字  个位一行的十个数字
    								if(i==0){//百位
    									baiWei.push($(this).text());
    								}
    								if(i==1){//十位
    									shiWei.push($(this).text());
    								}
    								if(i==2){//个位
    									geWei.push($(this).text());
    								}
    						});
    					});
            		});	
                	lottery= baiWei.join("")+Constant.g+shiWei.join("")+Constant.g+geWei.join("");//购买详细
                    break;
                case 7://和数
                	this.typeName="和数";
                	pailie_choose_numwrap.children("li").each(function(i,item){//
    					$(this).find(".pailie_num_bit").each(function(){//
    						$(this).find("li.curr").each(function(){//
    									baiWei.push($(this).text());
    						});
    					});
            		});	
                	lottery= baiWei.join(Constant.g);//购买详细
                    break;
                case 8://包数
                	var zuxuanType=$("input[name='baoxuan']:checked").attr("id");
                    pailie_choose_numwrap.children("li").each(function(i,item){//百位、十位、个位  <li>
    					$(this).find(".pailie_num_bit").each(function(){//分别迭代到百位一行  十位一行  个位一行数字
    						$(this).find("li.curr").each(function(){//分别迭代到百位一行中的十个数字  十位一行的十个数字  个位一行的十个数字
    								if(i==0){//百位
    									baiWei.push($(this).text());
    								}
    								if(i==1){//十位
    									shiWei.push($(this).text());
    								}
    								if(i==2){//十位
    									geWei.push($(this).text());
    								}
    								if(i==3){//百位
    									baiWei.push($(this).text());
    								}
    								if(i==4){//十位
    									shiWei.push($(this).text());
    								}
    								if(i==5){//十位
    									geWei.push($(this).text());
    								}
    						});
    					});
            		});	
                    if(zuxuanType=="bet_3d_91"){//两同号
                    	this.typeName="包选三";
                    	lottery= baiWei.join("")+Constant.g+shiWei.join("")+Constant.g+geWei.join("");//购买详细
                    }
                    if(zuxuanType=="bet_3d_92"){//两不同号
                    	this.typeName="包选六";
                    	lottery= baiWei.join("")+Constant.g+shiWei.join("")+Constant.g+geWei.join("");//购买详细
                    }
                	break;
                case 9://猜大小
                	this.typeName="猜大小";
                	 pailie_choose_numwrap.children("li").each(function(i,item){//百位、十位、个位  <li>
     					$(this).find(".pailie_num_bit").each(function(){//分别迭代到百位一行  十位一行  个位一行数字
     						$(this).find("li.curr").each(function(){//分别迭代到百位一行中的十个数字  十位一行的十个数字  个位一行的十个数字
     								if(i==0){//百位
     									baiWei.push($(this).text());
     								}
     						});
     					});
             		});	
                	 lottery= baiWei.join("");//购买详细
                    break;
                case 10://猜三同
                	this.typeName="猜三同";
                	pailie_choose_numwrap.children("li").each(function(i,item){//百位、十位、个位  <li>
     					$(this).find(".pailie_num_bit").each(function(){//分别迭代到百位一行  十位一行  个位一行数字
     						$(this).find("li.curr").each(function(){//分别迭代到百位一行中的十个数字  十位一行的十个数字  个位一行的十个数字
     								if(i==0){//百位
     									baiWei.push($(this).text());
     								}
     						});
     					});
             		});	
                	 lottery= baiWei.join("");//购买详细
                	break;
                case 11://拖拉机
                	this.typeName="拖拉机";
                	pailie_choose_numwrap.children("li").each(function(i,item){//百位、十位、个位  <li>
     					$(this).find(".pailie_num_bit").each(function(){//分别迭代到百位一行  十位一行  个位一行数字
     						$(this).find("li.curr").each(function(){//分别迭代到百位一行中的十个数字  十位一行的十个数字  个位一行的十个数字
     								if(i==0){//百位
     									baiWei.push($(this).text());
     								}
     						});
     					});
             		});	
                	 lottery= baiWei.join("");//购买详细
                	break;
                case 12://猜奇偶
                	this.typeName="猜奇偶";
                	pailie_choose_numwrap.children("li").each(function(i,item){//百位、十位、个位  <li>
     					$(this).find(".pailie_num_bit").each(function(){//分别迭代到百位一行  十位一行  个位一行数字
     						$(this).find("li.curr").each(function(){//分别迭代到百位一行中的十个数字  十位一行的十个数字  个位一行的十个数字
     								if(i==0){//百位
     									baiWei.push($(this).text());
     								}
     						});
     					});
             		});	
                	 lottery= baiWei.join("");//购买详细
                	break;
            	}
            	return lottery;
            }
        	
};
/**
 * 初始化倒计时和期号信息等页面信息
 */
function init3DInfo(){
	
	
	var json={};
	$.ajax({
		type : "POST",  //提交方式
		datatype:"json",
		url : "init3d",//路径
		data :json ,//数据，这里使用的是Json格式进行传输
		success : function(data) {//返回数据根据结果进行相应的处理
			var currentIsSueNumber = data.isSueNumber;//期号
			displaySubmit(data.isOpen);
			var downTime = data.downTime;//倒计时时间  "HH:mm:ss"
			var lotteryIssueInfos = data.lotteryIssueInfos;//未开奖的所有期号。最大120期 LIST<LotteryIssueInfo>
			var issueSize = data.issueSize;//追号的总期数
			var startDate = data.startDate;//本期开奖时间
			$("#issueSize").text("(共"+issueSize+"期)");
			var html = initIsSueNumberInfo(startDate,currentIsSueNumber,lotteryIssueInfos);
			$(".zhuihaoBox_con").append(html);
			/**
			 * 初始化追号信息   事件绑定
			 */
			initZhuiHaoBind();
			$("#isSueNumber").text(currentIsSueNumber);
			//倒计时
			timeDown($("#is-count-down"), downTime, function(){
				//回调
				console.log("00:00");
			});
		}
    });
	
}
/**
 * 生成购买方式： 追号的未开奖期号DIV
 * @param currentIsSueNumber
 * @param lotteryIssueInfos
 * @param html
 */
function initIsSueNumberInfo(startDate,currentIsSueNumber,lotteryIssueInfos){
	var html="";
	html+="<dd class=\"bg_f7f7f7 active\">"+//当前期号
	"<span class=\"serialNum\">1</span>"+
	"<span class=\"period\">"+
	"<label>"+
	  "<input type=\"checkbox\" id=\"zhuihao\" name=\"number\" value=\""+currentIsSueNumber+"\" checked=\"checked\"> 第"+currentIsSueNumber+"期"+
	"</label><em>(当前期)</em>"+
    "</span>"+
    "<span class=\"multiple\">"+
	  "<input class=\"zhuihaoInput\" name=\"number\" type=\"text\" autocomplete=\"off\" pid=\"106657\" value=\"1\"> 倍</span><span class=\"amount\"><b>¥</b><em class=\"zhuihaoyuan\">0</em>元"+
	"</span>"+
	"<span class=\"datetime\">"+startDate+"</span>"+
"</dd>";
	$(lotteryIssueInfos).each(function(i,item){
		var isSueNumber = this.isSueNumber;//未开奖的期号
		if(i==0){//下期
			html+="<dd class=\"active display\">"+
			  "<span class=\"serialNum\">2</span>"+
			  "<span class=\"period\">"+
			  "<label>"+
			    "<input type=\"checkbox\" id=\"zhuihao\"  name=\"number\" value=\""+isSueNumber+"\" checked=\"checked\"> 第"+isSueNumber+"期"+
			  "</label><em>(下期)</em>"+
			  "</span>"+
			  "<span class=\"multiple\">"+
			    "<input class=\"zhuihaoInput\" name=\"number\" type=\"text\" autocomplete=\"off\" pid=\"106658\" value=\"1\"> 倍"+
			  "</span>"+
			  "<span class=\"amount\"><b>¥</b><em class=\"zhuihaoyuan\">0</em>元</span>"+
			  "<span class=\"datetime\">"+this.startTime+"</span>"+
		    "</dd>";
		}else{
			html+="<dd class=\"bg_f7f7f7 active display\">"+
				"<span class=\"serialNum\">3</span>"+
				"<span class=\"period\">"+
				"<label>"+
				  "<input type=\"checkbox\" id=\"zhuihao\"  name=\"number\" value=\""+isSueNumber+"\" checked=\"checked\"> 第"+isSueNumber+"期"+
				"</label>"+
			    "</span>"+
			    "<span class=\"multiple\">"+
				  "<input class=\"zhuihaoInput\" name=\"number\" type=\"text\" autocomplete=\"off\" pid=\"106657\" value=\"1\"> 倍</span><span class=\"amount\"><b>¥</b><em class=\"zhuihaoyuan\">0</em>元"+
				"</span>"+
				"<span class=\"datetime\">"+this.startTime+"</span>"+
			"</dd>";
		}
	});
	return html;
}
$(function(){
	Lottery.init();
	init3DInfo();
	ValidateScheme.init();
	init_gonggao_li();
	init_winning_li();
	//参与合买的数据列表
	initSalesList();
	//跟单 top10 列表
	t_10();
	//定制跟单
	selfFollow();
});

/**
 * 初始化开奖公告
 */
function init_gonggao_li(){
	var html="<li><span>期次</span><span>开奖号码</span</li>";
	$.ajax({
		type : "POST",  //提交方式
		datatype:"json",
		url : "openlotteryInfo",//路径
		data : {"type":"1"},//数据，这里使用的是Json格式进行传输
		success : function(result) {//返回数据根据结果进行相应的处理
			console.log(result);
			$(result).each(function(i,item){
				if(i>5)return false;
				
				/**
				 * <li class="curr">
								<span>2016040</span>
								<span class="lde-ol-num">1 4 3</span>
							</li>
				 */
				html+="<li  class=\"curr\"><span>"+this.issueNumber+"</span>"+
					      "<span class=\"lde-ol-num\">";
				  var arrayNumber = this.number;
				  //组装中奖号码
				  if(arrayNumber!=null){
					  var array = arrayNumber.split(Constant.g);
					  for(var i=0;i<array.length;i++){
						  html+=" "+array[i]+" ";
					  }
				  }
				  html+="</span>"+
					"</li>";
			});
			$("#openLotteryList").html(html);
		}
    });
}
///**
// * 初始化最新中奖
// */
//function init_winning_li(){
//	var html="";
//	$.ajax({
//		type : "POST",  //提交方式
//		datatype:"json",
//		url : "winningLottery",//路径
//		data : {"type":"1"},//数据，这里使用的是Json格式进行传输
//		success : function(result) {//返回数据根据结果进行相应的处理
//			$(result).each(function(i,item){
//				/**
//				 * <li class="fn-clear">
//								 <p class="fn-left my-table-title lde-rlabel">huanghseifhaskdfj</p>
//								 <p class="lde-rvalue fn-left">喜中<span>3000000.00</span>元</p>
//							 </li>
//				 */
//				var winningAmount = this.winningAmount;
//				if(winningAmount=="null")winningAmount="0.00";
//				html+="<li class=\"fn-clear\">"+
//				 "<p class=\"fn-left my-table-title lde-rlabel\">"+this.userName+"</p>"+
//				 "<p class=\"lde-rvalue fn-left\">喜中<span>"+winningAmount+"</span>元</p>"+
//			 "</li>";
//			});
//			$(".index-newprize").html(html);
//		}
//    });
//}

//////////////////////////////////参与合买 操作 开始///////////////////////////////////////
/**
 * 初始化合买列表信息
 */
function initSalesList(){
	var status = 1;//状态
	var userName = $('#userName').val();//发起人
	var pageSize = $("#pageSize").val();
	var html = "";
	var jsondatas={"type":1,"page.pageNo":"1","page.pageSize":pageSize,"status":status,"userName":userName};
	$.ajax({
		type : "POST",  // 提交方式
		datatype:"json",
		url : basePath+"saleslottery/buyList",// 路径
		data : jsondatas,// 数据，这里使用的是Json格式进行传输
		success : function(data) {// 返回数据根据结果进行相应的处理
			$(".index-recommend").show();
			$(".index-empty").hide();
			var totalPage = data.totalPage;
			$("#totalPage").val(totalPage);
			$(data.result).each(function(order,item){
				order=order+1;
				html = initTableHtml(html,this,order);
			});
			$("#tbody").html(html);
			initPage(totalPage,1);
		}
    });
}
/**
 * 初始化分页html
 * @param totalPage  总页数
 * @param pageNo  当前页数
 */
function initPage(totalPage,pageNo){
	var pageHtml ="";
	if(totalPage==1){
		pageHtml+="<span class=\"comm-page-prev\">&lt;上一页</span>"+
		"<a onclick=\"goPage('1');\">1</a>"+
		"<span class=\"comm-page-next\">下一页&gt;</span>";
		
	}else if(totalPage>pageNo&&pageNo==1){
		pageHtml+="<span class=\"comm-page-prev\">&lt;上一页</span>";
		for (var i =1;i<=totalPage;i++){
			pageHtml+="<a onclick=\"goPage('"+i+"');\">"+i+"</a>";
		}
		pageHtml+="<span class=\"comm-page-next\"  onclick=\"goPage('"+Number(Number(pageNo)+1)+"');\">下一页&gt;</span>";
	}else if(totalPage>pageNo&&pageNo!=1){
		pageHtml+="<span class=\"comm-page-prev\" onclick=\"goPage('"+Number(Number(pageNo)-1)+"');\">&lt;上一页</span>";
		for (var i =1;i<pageNo;i++){
			pageHtml+="<a onclick=\"goPage('"+i+"');\">"+i+"</a>";
		}
		for (var i =pageNo;i<=totalPage;i++){
			pageHtml+="<a onclick=\"goPage('"+i+"');\">"+i+"</a>";
		}
		pageHtml+="<span class=\"comm-page-next\"  onclick=\"goPage('"+Number(Number(pageNo)+1)+"');\">下一页&gt;</span>";
	}else if(totalPage==pageNo&&pageNo!=1){
		pageHtml+="<span class=\"comm-page-prev\" onclick=\"goPage('"+Number(Number(pageNo)-1)+"');\">&lt;上一页</span>";
		for (var i =1;i<=totalPage;i++){
			pageHtml+="<a onclick=\"goPage('"+i+"');\">"+i+"</a>";
		}
		pageHtml+="<span class=\"comm-page-next\"  >下一页&gt;</span>";
	
	}else if(pageNo>totalPage){
		pageHtml+="<span class=\"comm-page-prev\">&lt;上一页</span>"+
		"<a onclick=\"goPage('1');\">1</a>"+
		"<span class=\"comm-page-next\">下一页&gt;</span>";
	}
	pageHtml+="<span class=\"comm-page-acount\">共"+totalPage+"页</span>"+
	"<span class=\"comm-page-to\">到第<input class=\"comm-page-page\" type=\"text\" id=\"pageInput\" value=\"\"/>页</span>"+
	"<span class=\"comm-page-submit\" onclick=\"sumbitPage();\">确定</span>";
	$("#Marke_nI_pageList").html(pageHtml);
}

/**
 * 初始化列表表格信息
 * @param table
 * @param obj
 * @param order
 * @returns
 */
function initTableHtml(table,obj,order){
	table=table+"<tr>"+
	"<td>"+order+"</td>"+
	"<td class=\"my-table-title\">"+obj.userName+"</td>"+	
	"<td><i class=\"sl-star sl-s4\"></i></td>"+	
	"<td>"+obj.totalAmount+"元</td>"+
	"<td>"+obj.overplusCopie+"</td>"+
	"<td class=\"comm-required\">1.00</td>"+	
	"<td>"+obj.schedule+"</td>";
	if(obj.status=="0"&&obj.overplusAmount>0){//招募中
		table=table+"<td class=\"sl-input\">未满员</td>";	
		table=table+"<td><a class=\"sl-btn-detail\" href=\""+basePath+"saleslottery/info/"+obj.id+"\">入伙</a></td>"+	
		"</tr>";
	}else{
		table=table+"<td class=\"sl-input\">满员</td>";
		table=table+"<td>—</td>"+	
		"</tr>";
	}
	return table;
};
/**
 * 分页函数
 * @param pageNo
 */
function goPage(pageNo){
	var status = $('#status option:selected').val();//状态
	var yongjin = $('#yongjin option:selected').val();//佣金
	var baodi = $('#baodi option:selected').val();//保底
	var userName = $('#userName').val();//发起人
	var pageSize = $("#pageSize").val();
	var html = "";
	var jsondatas={"type":type,"page.pageNo":pageNo,"page.pageSize":pageSize,"status":status,"yongjin":yongjin,"baodi":baodi,"userName":userName};
	$.ajax({
		type : "POST",  // 提交方式
		datatype:"json",
		url : "list",// 路径
		data : jsondatas,// 数据，这里使用的是Json格式进行传输
		success : function(data) {// 返回数据根据结果进行相应的处理
			console.log(data);
			var totalPage = data.totalPage;
			$("#totalPage").val(totalPage);
			console.log(totalPage);
			$(data.result).each(function(order,item){
				order=order+1;
				html = initTableHtml(html,this,order);
			});
			$("#tbody").html(html);
			initPage(totalPage,pageNo);
		}
    });
}
/**
 * 跳转到固定页面
 */
function sumbitPage(){
	var pageInput = $("#pageInput").val();
	goPage(pageInput);
}
/**
 * 查询
 */
function searchPage(){
	initSalesList();
}

//////////////////////////////////参与合买 操作 结束///////////////////////////////////////
////////////////////////////////////定制跟单//////////////////////////////////////////
/**
 * 定制跟单
 */
function selfFollow(){
	var typeId=$("#tpyeId").val();
	var json={"typeId":typeId};
	$.ajax({
		type : "POST",  // 提交方式
		datatype:"json",
		url : basePath+"/followorder/self_f",// 路径
		data : json,// 数据，这里使用的是Json格式进行传输
		success : function(data) {// 返回数据根据结果进行相应的处理
			var html= "";
			$(data.followOrderVos).each(function(order,item){
				order=order+1;
				html = initSelfTableHtml(html,this,order);
			});
			$("#selfFollowTable").html(html);
		}
    });
}
function t_10(){
	var typeId=$("#tpyeId").val();
	var json={"typeId":typeId};
	$.ajax({
		type : "POST",  // 提交方式
		datatype:"json",
		url : basePath+"/followorder/get_f_t_10",// 路径
		data : json,// 数据，这里使用的是Json格式进行传输
		success : function(data) {// 返回数据根据结果进行相应的处理
			var html= "";
			$(data.followOrderVos).each(function(order,item){
				order=order+1;
				html = initT10TableHtml(html,this,order);
			});
			$("#top10").html(html);
			initFoWin();
		}
    });
}
function initT10TableHtml(table,obj,order){
	table=table+"<tr>"+
	"<td>"+order+"</td>"+
	"<td><i class=\"sl-star sl-s4\"></i></td>"+	
	"<td class=\"my-table-title\">"+obj.userName+"</td>"+
	"<td>"+obj.renqi+"</td>"+
	"<td class=\"comm-required\">"+obj.totalAmount+"</td>"+	
	"<td>"+obj.winningAmount+"</td>"+
	"<td><a name=\""+obj.userId+"\" dir=\""+obj.userName+"\" class=\"btn-custom\">定制</a></td>"+
	"</tr>";
	return table;
};
function initSelfTableHtml(table,obj,order){
	table=table+"<tr>"+
	"<td>"+obj.userName+"</td>"+
	"<td><i class=\"sl-star sl-s4\"></i></td>"+	
	"<td class=\"my-table-title\">已定制</td>"+
	"<td>查看</td>"+
	"<td class=\"comm-required\">已定制</td>"+	
	"<td><a name=\""+obj.userId+"\" dir=\""+obj.userName+"\" class=\"btn-custom\">修改/取消</a></td>"+
	"</tr>";
	return table;
};

/*
 * ****************************** 定制跟单 ******************************
 */
function initFoWin(){
	var foWin = {
			fw_shade:$(".fo-shade"),
			fw_window:$(".ff_w"),
			fw_btn_close:$("#fo-btn-close"),
			fw_btn_cancle:$("#fo-btn-cancle")
		};
		$(".btn-custom").each(function(){
			$(this).on("click", function(){
				foWin.fw_shade.show();
				foWin.fw_window.show();
				var userId= $(this).attr("name");
				var userName= $(this).attr("dir");
				console.log(userName);
				$("#gendanuserId").val(userId);
				$("#userName").html(userName);
				$("#typeName").html("福彩3D");
			});
		});
		foWin.fw_btn_close.on("click", function(){
			foWin.fw_shade.hide();
			foWin.fw_window.hide();
		});
		foWin.fw_btn_cancle.on("click", function(){
			foWin.fw_shade.hide();
			foWin.fw_window.hide();
		});
}
function _s_b(){
	$("#fo-shade").css('z-index',"99999");
	$("#fo-shade").show();
	var url = $("#s_Form").attr('action');
	$("#formtTypeId").val($("#tpyeId").val());
	 $.ajax({
         url:url,
         data:$("#s_Form").serialize(),
         type : "POST", // 提交方式
		datatype : "json",
         success:function(data){//ajax返回的数据
        	if(data.code=="1"){
        		toast("恭喜，定制成功。");
        	}
        	if(data.code=="-1"){
        		toast("定制失败，请刷新页面，重新定制。");
        	}
        	if(data.code=="-2"){
        		toast("登录超时，请重新登录");
        	}
        	if(data.code=="-3"){
        		toast("数据提交异常，请刷新页面，重新定制。");
        	}
        	$(".fo-shade").hide();
			$(".fo-window").hide();
			$("#fo-shade").hide();
         }
    });     
}
////////////////////////////////////定制跟单 结束//////////////////////////////////////////
