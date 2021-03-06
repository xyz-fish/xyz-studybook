// * https://leetcode-cn.com/problems/implement-rand10-using-rand7/

/**
 * 方法1
 * 直接 rand7 + rand7 没有1 的值 通过 相乘 获取 到一个值，最大是7 * 7 = 49
 * 怎么获取均匀的随机呢？因为需要1-10 10个数字的随机，所以49个数后面9个 没法确定，每个数随机相等（49 / 10 = 4.9） 每个相对应1-10 的比列是4/49随机比列相等
 * 因此把1-40的数字对应到rand7 * rand7 的矩阵数字中，再转成相应的对应的1-10的数字
 * 根据前两步骤 我们需要把 > 40 的拒绝掉
 */

/*
随机生成的每个数比列都是1/7 * 1/7 = 1/49 对应的1-40 每个数也是1/49 1-40可以转化4个1-10  随机比列是 4/49 保证这些输出就可以了
	1	2	3	4	5	6	7
1	1	2	3	4	5	6	7
2	8 9 10 11 12 13 14
3
4
5
6
7
*/

function rand10() {
	// 定义 i 第一个随机数 j 第二个随机数, n 是 对应 生成随机数矩阵中的数
	let i, j, n

	do {
		i= rand7()
		j = rand7()
		n = i + (j - 1) * 7 // 这里通过矩阵对应
	}
	return 1 + (n - 1) % 10 // 这里 等于 n % 10 || 10
}

/**
 * 方法2
 * 基于方法1 当7 * 7 的时候确定 前40个是4/49 所以当我们两个随机数相乘 > 40 的时候 被拒绝的数中 最大可能是9
 * 在去一个随机数rand7 随机数取值范围变成了[1, 7 * 9] 前60个我们又可以6/69
 * 重复上面的取值范围 [1, 21] 前20个 比列都是2/21 余下1的时候（1 * 7 < 10） 这些数是没法确定均匀随机的 所以我们需要重新确定是否均匀
 */

function rand10two() {
	let i, j, n

	while (true) {
		i = rand7()
		j = rand7()
		n = i + (j - 1) * 7

		if (n <= 40) {
			return 1 + (n - 1) % 10
		}

		j = n - 40
		// 去除未确定均匀对应的1-10的数
		n = rand7() + (j - 1) * 7
		if (n <= 60) {
			return 1 + (n - 1) % 10
		}

		j = n - 60
		n = rand7() + (j - 1) * 7
		if (n <= 20) {
			return 1 + (n - 1) % 10
		}
	}
}

/**
 * 方法3
 * 在通过1-7中 取样1-6可以判断值的奇偶 1/2 取余 1/2 的值在1 1/2是0
 * 我们取值是10 所以第一个取样为了保证均匀性 5 + 5 分开 第一个取样的值为 1 * 5 或 0 * 5, 需要第二个取样1-5 1/5的比例
 */

function rand10three() {
	let i, j // 两个取样

	do {
		i = rand7()
	} while(i > 6)

	i = i % 2

	do {
		j = rand7()
	} while(j > 5)

	return i * 5 + j
}



