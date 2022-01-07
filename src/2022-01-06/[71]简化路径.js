
// * https://leetcode-cn.com/problems/simplify-path/

function simplePath(path) {
	const fnames = path.split('/')
	const stackf = []
	for (let i = 0; i < fnames.length; i++) {
		const cn = fnames[i]

		if (cn === '.' || cn = '') continue

		if (cn === '..') {
			stackf.pop()
		} else {
			stackf.push(cn)
		}
	}

	return '/' + stackf.join('/')
}