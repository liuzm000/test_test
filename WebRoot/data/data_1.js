var data = {
	"name" : "福彩3D",
	"time" : "每天20:30开奖",
	"play" : [
			{
				"name" : "单选",
				"kind" : [ {
					"name" : "普通投注",
					"description" : "玩法说明：投注号码与当期开奖号码按位全部相同（百位+十位+个位），即中得1800元！",
					"price" : 1800,
					"max" : 11,
					"min" : 2,
					"playId" : "1",
					"select" : [
							{
								"parent" : "单选",
								"repeat" : true,
								"tip" : "百位",
								"name" : "普通投注",
								"description" : "玩法说明：投注号码与当期开奖号码按位全部相同（百位+十位+个位），即中得1800元！",
								"price" : 1800,
								"max" : 11,
								"min" : 2,
								"playId" : "1",
								"numbers" : "0,1,2,3,4,5,6,7,8,9",
								"subNumbers" : "0,8,1,14,13,22,3,9,11,7"
							},
							{
								"parent" : "单选",
								"repeat" : true,
								"tip" : "十位",
								"name" : "普通投注",
								"description" : "玩法说明：投注号码与当期开奖号码按位全部相同（百位+十位+个位），即中得1800元！",
								"price" : 1800,
								"max" : 11,
								"min" : 2,
								"playId" : "1",
								"numbers" : "0,1,2,3,4,5,6,7,8,9",
								"subNumbers" : "22,5,7,2,0,8,19,1,9,6"
							},
							{
								"parent" : "单选",
								"repeat" : true,
								"tip" : "个位",
								"name" : "普通投注",
								"description" : "玩法说明：投注号码与当期开奖号码按位全部相同（百位+十位+个位），即中得1800元！",
								"price" : 1800,
								"max" : 11,
								"min" : 2,
								"playId" : "1",
								"numbers" : "0,1,2,3,4,5,6,7,8,9",
								"subNumbers" : "7,0,15,1,3,21,14,5,10,11"
							} ]
				} ]
			},
			{
				"name" : "组选",
				"kind" : [
						{
							"name" : "组选三",
							"description" : "玩法说明：选号与奖号一致（但顺序不限），且有任意两位相同即中600元！ 中奖示例：选号：188 818 881 奖号：188",
							"price" : 188,
							"max" : 11,
							"min" : 2,
							"playId" : "2",
							"select" : [ {
								"parent" : "组选",
								"repeat" : true,
								"tip" : "百位",
								"name" : "组选三",
								"description" : "玩法说明：选号与奖号一致（但顺序不限），且有任意两位相同即中600元！ 中奖示例：选号：188 818 881 奖号：188",
								"price" : 188,
								"max" : 11,
								"min" : 2,
								"playId" : "2",
								"numbers" : "0,1,2,3,4,5,6,7,8,9",
								"subNumbers" : "0,0,1,1,0,8,3,1,9,6"
							} ]
						},
						{
							"name" : "组选六",
							"description" : "玩法说明：选号与奖号相同（顺序不限）,即中300元！ 中奖示例：选号: 168 186 618 681 861 816 奖号：168",
							"price" : 168,
							"max" : 11,
							"min" : 2,
							"playId" : "3",
							"select" : [ {
								"parent" : "组选",
								"repeat" : true,
								"tip" : "百位",
								"name" : "组选六",
								"description" : "玩法说明：选号与奖号相同（顺序不限）,即中300元！ 中奖示例：选号: 168 186 618 681 861 816 奖号：168",
								"price" : 168,
								"max" : 11,
								"min" : 2,
								"playId" : "3",
								"numbers" : "0,1,2,3,4,5,6,7,8,9",
								"subNumbers" : "0,0,1,1,0,8,3,1,9,6"
							} ]
						} ]
			},
			{
				"name" : "1D",
				"kind" : [ {
					"name" : "普通投注",
					"description" : "玩法说明：对固定的一个位置进行选号，投注号码与当期开奖号码中对应位置的号码相同，即中得10元！",
					"price" : 10,
					"max" : 11,
					"min" : 2,
					"playId" : "4",
					"select" : [
							{
								"parent" : "1D",
								"repeat" : true,
								"tip" : "百位",
								"name" : "普通投注",
								"description" : "玩法说明：对固定的一个位置进行选号，投注号码与当期开奖号码中对应位置的号码相同，即中得10元！",
								"price" : 10,
								"max" : 11,
								"min" : 2,
								"playId" : "4",
								"numbers" : "0,1,2,3,4,5,6,7,8,9",
								"subNumbers" : "0,8,1,14,13,22,3,9,11,7"
							},
							{
								"parent" : "1D",
								"repeat" : true,
								"tip" : "十位",
								"name" : "普通投注",
								"description" : "玩法说明：对固定的一个位置进行选号，投注号码与当期开奖号码中对应位置的号码相同，即中得10元！",
								"price" : 10,
								"max" : 11,
								"min" : 2,
								"playId" : "4",
								"numbers" : "0,1,2,3,4,5,6,7,8,9",
								"subNumbers" : "22,5,7,2,0,8,19,1,9,6"
							},
							{
								"parent" : "1D",
								"repeat" : true,
								"tip" : "个位",
								"name" : "普通投注",
								"description" : "玩法说明：对固定的一个位置进行选号，投注号码与当期开奖号码中对应位置的号码相同，即中得10元！",
								"price" : 10,
								"max" : 11,
								"min" : 2,
								"playId" : "4",
								"numbers" : "0,1,2,3,4,5,6,7,8,9",
								"subNumbers" : "7,0,15,1,3,21,14,5,10,11"
							} ]
				} ]
			},
			{
				"name" : "猜1D",
				"kind" : [ {
					"name" : "普通投注",
					"description" : "玩法说明：所选号码在开奖号码中出现，位置不限，出现一次中得2元，出现两次中得12元，出现三次中得230元！",
					"price" : 2,
					"max" : 11,
					"min" : 2,
					"playId" : "5",
					"select" : [ {
						"parent" : "猜1D",
						"repeat" : true,
						"tip" : "百位",
						"name" : "普通投注",
						"description" : "玩法说明：所选号码在开奖号码中出现，位置不限，出现一次中得2元，出现两次中得12元，出现三次中得230元！",
						"price" : 2,
						"max" : 11,
						"min" : 2,
						"playId" : "5",
						"numbers" : "0,1,2,3,4,5,6,7,8,9",
						"subNumbers" : "0,0,1,1,0,8,3,1,9,6"
					} ]
				} ]
			},
			{
				"name" : "2D",
				"kind" : [ {
					"name" : "普通投注",
					"description" : "玩法说明：对固定的两个位置进行选号，投注号码与当期开奖号码中对应两个位置的号码按位相同，即中得104元！",
					"price" : 104,
					"max" : 11,
					"min" : 2,
					"playId" : "6",
					"select" : [
							{
								"parent" : "2D",
								"repeat" : true,
								"tip" : "百位",
								"name" : "普通投注",
								"description" : "玩法说明：对固定的两个位置进行选号，投注号码与当期开奖号码中对应两个位置的号码按位相同，即中得104元！",
								"price" : 104,
								"max" : 11,
								"min" : 2,
								"playId" : "6",
								"numbers" : "0,1,2,3,4,5,6,7,8,9",
								"subNumbers" : "0,8,1,14,13,22,3,9,11,7"
							},
							{
								"parent" : "2D",
								"repeat" : true,
								"tip" : "十位",
								"name" : "普通投注",
								"description" : "玩法说明：对固定的两个位置进行选号，投注号码与当期开奖号码中对应两个位置的号码按位相同，即中得104元！",
								"price" : 104,
								"max" : 11,
								"min" : 2,
								"playId" : "6",
								"numbers" : "0,1,2,3,4,5,6,7,8,9",
								"subNumbers" : "22,5,7,2,0,8,19,1,9,6"
							},
							{
								"parent" : "2D",
								"repeat" : true,
								"tip" : "个位",
								"name" : "普通投注",
								"description" : "玩法说明：对固定的两个位置进行选号，投注号码与当期开奖号码中对应两个位置的号码按位相同，即中得104元！",
								"price" : 104,
								"max" : 11,
								"min" : 2,
								"playId" : "6",
								"numbers" : "0,1,2,3,4,5,6,7,8,9",
								"subNumbers" : "7,0,15,1,3,21,14,5,10,11"
							} ]
				} ]
			},
			{
				"name" : "猜2D",
				"kind" : [
						{
							"name" : "猜2D两同号",
							"description" : "玩法说明：投注两个相同号码，开奖号码包含所投注的两个相同号码，即中得37元！",
							"price" : 37,
							"max" : 11,
							"min" : 2,
							"playId" : "7",
							"select" : [ {
								"parent" : "猜2D",
								"repeat" : true,
								"tip" : "百位",
								"name" : "猜2D两同号",
								"description" : "玩法说明：投注两个相同号码，开奖号码包含所投注的两个相同号码，即中得37元！",
								"price" : 37,
								"max" : 11,
								"min" : 2,
								"playId" : "7",
								"numbers" : "0,1,2,3,4,5,6,7,8,9",
								"subNumbers" : "23,8,23,2,23,23,23,23,23,18"
							} ]
						},
						{
							"name" : "猜2D两不同号",
							"description" : "玩法说明：投注两个相同号码，开奖号码包含所投注的两个相同号码，即中得37元！",
							"price" : 37,
							"max" : 11,
							"min" : 2,
							"playId" : "8",
							"select" : [ {
								"parent" : "猜2D",
								"repeat" : true,
								"tip" : "百位",
								"name" : "猜2D两不同号",
								"description" : "玩法说明：投注两个相同号码，开奖号码包含所投注的两个相同号码，即中得37元！",
								"price" : 37,
								"max" : 11,
								"min" : 2,
								"playId" : "8",
								"numbers" : "0,1,2,3,4,5,6,7,8,9",
								"subNumbers" : "0,0,1,1,0,8,3,1,9,6"
							} ]
						} ]
			},
			{
				"name" : "通选",
				"kind" : [ {
					"name" : "普通投注",
					"description" : "玩法说明：两次中奖机会，所选号码与开奖号全部按位相同中得470元，只任意两位号码按位相同中得21元！",
					"price" : 21,
					"max" : 11,
					"min" : 2,
					"playId" : "9",
					"select" : [
							{
								"parent" : "通选",
								"repeat" : true,
								"tip" : "百位",
								"name" : "普通投注",
								"description" : "玩法说明：两次中奖机会，所选号码与开奖号全部按位相同中得470元，只任意两位号码按位相同中得21元！",
								"price" : 21,
								"max" : 11,
								"min" : 2,
								"playId" : "9",
								"numbers" : "0,1,2,3,4,5,6,7,8,9",
								"subNumbers" : "0,8,1,14,13,22,3,9,11,7"
							},
							{
								"parent" : "通选",
								"repeat" : true,
								"tip" : "十位",
								"name" : "普通投注",
								"description" : "玩法说明：两次中奖机会，所选号码与开奖号全部按位相同中得470元，只任意两位号码按位相同中得21元！",
								"price" : 21,
								"max" : 11,
								"min" : 2,
								"playId" : "9",
								"numbers" : "0,1,2,3,4,5,6,7,8,9",
								"subNumbers" : "22,5,7,2,0,8,19,1,9,6"
							},
							{
								"parent" : "通选",
								"repeat" : true,
								"tip" : "个位",
								"name" : "普通投注",
								"description" : "玩法说明：两次中奖机会，所选号码与开奖号全部按位相同中得470元，只任意两位号码按位相同中得21元！",
								"price" : 21,
								"max" : 11,
								"min" : 2,
								"playId" : "9",
								"numbers" : "0,1,2,3,4,5,6,7,8,9",
								"subNumbers" : "7,0,15,1,3,21,14,5,10,11"
							} ]
				} ]
			},
			{
				"name" : "和数",
				"kind" : [ {
					"name" : "普通投注",
					"description" : "玩法说明：投注号码与当期开奖号码的三个号码相加之和相同，即中得相应得元(14-1040)！",
					"price" : 180,
					"max" : 11,
					"min" : 2,
					"playId" : "10",
					"select" : [
							{
								"parent" : "和数",
								"repeat" : true,
								"tip" : "百位",
								"name" : "普通投注",
								"description" : "玩法说明：投注号码与当期开奖号码的三个号码相加之和相同，即中得相应得元(14-1040)！",
								"price" : 180,
								"max" : 11,
								"min" : 2,
								"playId" : "10",
								"numbers" : "0,1,2,3,4,5,6,7,8,9,10,11,12,13",
								"subNumbers" : "23,23,23,23,23,0,2,8,5,23,23,7,1,3"
							},
							{
								"parent" : "和数",
								"repeat" : true,
								"tip" : "十位",
								"name" : "普通投注",
								"description" : "玩法说明：投注号码与当期开奖号码的三个号码相加之和相同，即中得相应得元(14-1040)！",
								"price" : 180,
								"max" : 11,
								"min" : 2,
								"playId" : "10",
								"numbers" : "14,15,16,17,18,19,20,21,22,23,24,25,26,27",
								"subNumbers" : "19,16,6,10,23,9,11,1,3,23,23,23,23,18,23"
							} ]
				} ]
			},
			{
				"name" : "包选",
				"kind" : [
						{
							"name" : "包选三",
							"description" : "玩法说明：投注号码中任意两位数字相同，且与开奖号码全部按位相同即中693元，号码全部相同顺序不同173元！",
							"price" : 173,
							"max" : 11,
							"min" : 2,
							"playId" : "11",
							"select" : [
									{
										"parent" : "包选",
										"repeat" : true,
										"tip" : "百位",
										"name" : "包选三",
										"description" : "玩法说明：投注号码中任意两位数字相同，且与开奖号码全部按位相同即中693元，号码全部相同顺序不同173元！",
										"price" : 173,
										"max" : 11,
										"min" : 2,
										"playId" : "11",
										"numbers" : "0,1,2,3,4,5,6,7,8,9",
										"subNumbers" : "0,8,1,14,13,22,3,9,11,7"
									},
									{
										"parent" : "包选",
										"repeat" : true,
										"tip" : "十位",
										"name" : "包选三",
										"description" : "玩法说明：投注号码中任意两位数字相同，且与开奖号码全部按位相同即中693元，号码全部相同顺序不同173元！",
										"price" : 173,
										"max" : 11,
										"min" : 2,
										"playId" : "11",
										"numbers" : "0,1,2,3,4,5,6,7,8,9",
										"subNumbers" : "22,5,7,2,0,8,19,1,9,6"
									},
									{
										"parent" : "包选",
										"repeat" : true,
										"tip" : "个位",
										"name" : "包选三",
										"description" : "玩法说明：投注号码中任意两位数字相同，且与开奖号码全部按位相同即中693元，号码全部相同顺序不同173元！",
										"price" : 173,
										"max" : 11,
										"min" : 2,
										"playId" : "11",
										"numbers" : "0,1,2,3,4,5,6,7,8,9",
										"subNumbers" : "7,0,15,1,3,21,14,5,10,11"
									} ]
						},
						{
							"name" : "包选六",
							"description" : "玩法说明：投注号码中三位数字各不相同，且与开奖号码全部按位相同即中606元，号码全部相同顺序不同86元！",
							"price" : 86,
							"max" : 11,
							"min" : 2,
							"playId" : "12",
							"select" : [
									{
										"parent" : "包选",
										"repeat" : true,
										"tip" : "百位",
										"name" : "包选六",
										"description" : "玩法说明：投注号码中三位数字各不相同，且与开奖号码全部按位相同即中606元，号码全部相同顺序不同86元！",
										"price" : 86,
										"max" : 11,
										"min" : 2,
										"playId" : "12",
										"numbers" : "0,1,2,3,4,5,6,7,8,9",
										"subNumbers" : "0,8,1,14,13,22,3,9,11,7"
									},
									{
										"parent" : "包选",
										"repeat" : true,
										"tip" : "十位",
										"name" : "包选六",
										"description" : "玩法说明：投注号码中三位数字各不相同，且与开奖号码全部按位相同即中606元，号码全部相同顺序不同86元！",
										"price" : 86,
										"max" : 11,
										"min" : 2,
										"playId" : "12",
										"numbers" : "0,1,2,3,4,5,6,7,8,9",
										"subNumbers" : "22,5,7,2,0,8,19,1,9,6"
									},
									{
										"parent" : "包选",
										"repeat" : true,
										"tip" : "个位",
										"name" : "包选六",
										"description" : "玩法说明：投注号码中三位数字各不相同，且与开奖号码全部按位相同即中606元，号码全部相同顺序不同86元！",
										"price" : 86,
										"max" : 11,
										"min" : 2,
										"playId" : "12",
										"numbers" : "0,1,2,3,4,5,6,7,8,9",
										"subNumbers" : "7,0,15,1,3,21,14,5,10,11"
									} ]
						} ]
			},
			{
				"name" : "猜大小",
				"kind" : [ {
					"name" : "普通投注",
					"description" : "玩法说明：和值0含-8含为小，19含-27含为大。投注号码与开奖号码和值大小性质相同，即中得6元！",
					"price" : 5,
					"max" : 11,
					"min" : 2,
					"playId" : "13",
					"select" : [ {
						"parent" : "猜大小",
						"repeat" : true,
						"tip" : "选号",
						"name" : "普通投注",
						"description" : "玩法说明：和值0含-8含为小，19含-27含为大。投注号码与开奖号码和值大小性质相同，即中得6元！",
						"price" : 5,
						"max" : 1,
						"min" : 2,
						"playId" : "13",
						"numbers" : "大,小",
						"subNumbers" : "9,0"
					} ]
				} ]
			},
			{
				"name" : "猜三同",
				"kind" : [ {
					"name" : "普通投注",
					"description" : "玩法说明：开奖号码为三个相同号码，即豹子号，中得104元！",
					"price" : 104,
					"max" : 11,
					"min" : 2,
					"playId" : "14",
					"select" : [ {
						"parent" : "猜三同",
						"repeat" : true,
						"tip" : "选号",
						"name" : "普通投注",
						"description" : "玩法说明：开奖号码为三个相同号码，即豹子号，中得104元！",
						"price" : 104,
						"max" : 11,
						"min" : 2,
						"playId" : "14",
						"numbers" : "三同号",
						"subNumbers" : "23"
					} ]
				} ]
			},
			{
				"name" : "拖拉机",
				"kind" : [ {
					"name" : "普通投注",
					"description" : "玩法说明：当期开奖号码的三个号码为以升序或降序连续排列的号码（890、098、901、109除外），即中得 65元！",
					"price" : 65,
					"max" : 11,
					"min" : 2,
					"playId" : "15",
					"select" : [ {
						"parent" : "猜三同",
						"repeat" : true,
						"tip" : "选号",
						"name" : "普通投注",
						"description" : "玩法说明：当期开奖号码的三个号码为以升序或降序连续排列的号码（890、098、901、109除外），即中得 65元！",
						"price" : 65,
						"max" : 11,
						"min" : 2,
						"playId" : "15",
						"numbers" : "拖拉机",
						"subNumbers" : "23"
					} ]
				} ]
			},
			{
				"name" : "猜奇偶",
				"kind" : [ {
					"name" : "普通投注",
					"description" : "玩法说明：开奖号码的三个号码全部为奇数或偶数，投注号码与开奖号码的奇数、偶数性质相同，即中得8元！",
					"price" : 8,
					"max" : 11,
					"min" : 2,
					"playId" : "16",
					"select" : [ {
						"parent" : "猜奇偶",
						"repeat" : true,
						"tip" : "选号",
						"name" : "普通投注",
						"description" : "玩法说明：开奖号码的三个号码全部为奇数或偶数，投注号码与开奖号码的奇数、偶数性质相同，即中得8元！",
						"price" : 8,
						"max" : 1,
						"min" : 2,
						"playId" : "16",
						"numbers" : "奇,偶",
						"subNumbers" : "8,23"
					} ]
				} ]
			} ]
}