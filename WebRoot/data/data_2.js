var data = {
	"name" : "排列3",
	"time" : "每天20:30开奖,最高奖金1800元",
	"play" : [
			{
				"name" : "直选复式",
				"kind" : [ {
					"name" : "普通投注",
					"description" : "玩法说明：单注选号与开奖号码按位一致即中奖1800元！",
					"price" : 1800,
					"max" : 11,
					"min" : 2,
					"playId" : "17",
					"select" : [ {
						"parent" : "直选复式",
						"repeat" : true,
						"tip" : "百位",
						"name" : "普通投注",
						"description" : "玩法说明：单注选号与开奖号码按位一致即中奖1800元！",
						"price" : 1800,
						"max" : 11,
						"min" : 2,
						"playId" : "17",
						"numbers" : "0,1,2,3,4,5,6,7,8,9",
						"subNumbers" : "21,14,23,9,23,0,4,1,5,2"
					}, {
						"parent" : "直选复式",
						"repeat" : true,
						"tip" : "十位",
						"name" : "普通投注",
						"description" : "玩法说明：单注选号与开奖号码按位一致即中奖1800元！",
						"price" : 1800,
						"max" : 11,
						"min" : 2,
						"playId" : "17",
						"numbers" : "0,1,2,3,4,5,6,7,8,9",
						"subNumbers" : "3,7,1,23,5,4,20,0,17,6"
					}, {
						"parent" : "直选复式",
						"repeat" : true,
						"tip" : "个位",
						"name" : "普通投注",
						"description" : "玩法说明：单注选号与开奖号码按位一致即中奖1800元！",
						"price" : 1800,
						"max" : 11,
						"min" : 2,
						"playId" : "17",
						"numbers" : "0,1,2,3,4,5,6,7,8,9",
						"subNumbers" : "2,0,11,1,15,5,9,4,3,10"
					} ]
				} ]
			},
			{
				"name" : "组选单式",
				"kind" : [ {
					"name" : "普通投注",
					"description" : "法说明：单注选号与开奖号码按位一致即中奖1800元！",
					"price" : 1800,
					"max" : 11,
					"min" : 2,
					"playId" : "18",
					"select" : [ {
						"parent" : "直选复式",
						"repeat" : true,
						"tip" : "选号",
						"name" : "普通投注",
						"description" : "法说明：单注选号与开奖号码按位一致即中奖1800元！",
						"price" : 1800,
						"max" : 11,
						"min" : 2,
						"playId" : "18",
						"numbers" : "0,1,2,3,4,5,6,7,8,9",
						"subNumbers" : "2,0,1,1,5,0,4,0,3,2"
					} ]
				} ]
			},
			{
				"name" : "组三复式",
				"kind" : [ {
					"name" : "普通投注",
					"description" : "玩法说明：所选号码与开奖号码一致，且顺序不限，其中开奖号码有任意两位相同，即中奖金600元！",
					"price" : 600,
					"max" : 11,
					"min" : 2,
					"playId" : "19",
					"select" : [ {
						"parent" : "组三复式",
						"repeat" : true,
						"tip" : "百位",
						"name" : "普通投注",
						"description" : "玩法说明：所选号码与开奖号码一致，且顺序不限，其中开奖号码有任意两位相同，即中奖金600元！",
						"price" : 600,
						"max" : 11,
						"min" : 2,
						"playId" : "19",
						"numbers" : "0,1,2,3,4,5,6,7,8,9",
						"subNumbers" : "23,15,12,23,23,23,13,16,23,23"
					} ]
				} ]
			},
			{
				"name" : "组六复式",
				"kind" : [ {
					"name" : "普通投注",
					"description" : "玩法说明：所选号码与开奖号码一致，且顺序不限，其中开奖号码有任意两位相同，即中奖金600元！",
					"price" : 600,
					"max" : 11,
					"min" : 2,
					"playId" : "20",
					"select" : [ {
						"parent" : "组六复式",
						"repeat" : true,
						"tip" : "百位",
						"name" : "普通投注",
						"description" : "玩法说明：所选号码与开奖号码一致，且顺序不限，其中开奖号码有任意两位相同，即中奖金600元！",
						"price" : 600,
						"max" : 11,
						"min" : 2,
						"playId" : "20",
						"numbers" : "0,1,2,3,4,5,6,7,8,9",
						"subNumbers" : "2,0,1,1,5,0,4,0,3,2"
					} ]
				} ]
			},
			{
				"name" : "组选和值",
				"kind" : [ {
					"name" : "普通投注",
					"description" : "玩法说明：所选的和值与开奖号码之和的值相同即中奖，组三奖金346元，组六奖金173元！",
					"price" : 173,
					"max" : 11,
					"min" : 2,
					"playId" : "21",
					"select" : [
							{
								"parent" : "组选和值",
								"repeat" : true,
								"tip" : "百位",
								"name" : "普通投注",
								"description" : "玩法说明：所选的和值与开奖号码之和的值相同即中奖，组三奖金346元，组六奖金173元！",
								"price" : 173,
								"max" : 11,
								"min" : 2,
								"playId" : "21",
								"numbers" : "1,2,3,4,5,6,7,8,9,10,11,12,13",
								"subNumbers" : "23,23,23,22,21,15,23,14,8,9,23,1,0"
							},
							{
								"parent" : "组选和值",
								"repeat" : true,
								"tip" : "十位",
								"name" : "普通投注",
								"description" : "玩法说明：所选的和值与开奖号码之和的值相同即中奖，组三奖金346元，组六奖金173元！",
								"price" : 173,
								"max" : 11,
								"min" : 2,
								"playId" : "21",
								"numbers" : "14,15,16,17,18,19,20,21,22,23,24,25,26",
								"subNumbers" : "7,3,2,5,4,16,23,23,17,23,23,23,23"
							} ]
				} ]
			},
			{
				"name" : "直选和值",
				"kind" : [ {
					"name" : "普通投注",
					"description" : "玩法说明：所选的和值与开奖号码之和的值相同即中1,040元！",
					"price" : 1040,
					"max" : 11,
					"min" : 2,
					"playId" : "22",
					"select" : [
							{
								"parent" : "直选和值",
								"repeat" : true,
								"tip" : "百位",
								"name" : "普通投注",
								"description" : "玩法说明：所选的和值与开奖号码之和的值相同即中1,040元！",
								"price" : 1040,
								"max" : 11,
								"min" : 2,
								"playId" : "22",
								"numbers" : "1,2,3,4,5,6,7,8,9,10,11,12,13",
								"subNumbers" : "23,23,23,23,22,21,15,23,14,8,9,23,1,0"
							},
							{
								"parent" : "直选和值",
								"repeat" : true,
								"tip" : "十位",
								"name" : "普通投注",
								"description" : "玩法说明：所选的和值与开奖号码之和的值相同即中1,040元！",
								"price" : 1040,
								"max" : 11,
								"min" : 2,
								"playId" : "22",
								"numbers" : "14,15,16,17,18,19,20,21,22,23,24,25,26,27",
								"subNumbers" : "7,3,2,5,4,16,23,23,17,23,23,23,23,10"
							} ]
				} ]
			} ]
}