// an endpoint for getting projects data
const projects = Array(50)
  .fill(0)
  .map((_, i) => {
    return {
      name: 'Project ' + i + ` (server time: ${Date.now()})`,
      id: i,
    }
  })
export default (req, res) => {
  const page = parseInt(req.query.page) || 1
  const pageSize = parseInt(req.query.pageSize) || 10

  const data = projects.slice((page - 1) * pageSize, pageSize * page)
  const totalCount = projects.length
  const totalPage = Math.ceil(projects.length / pageSize)
  const response = {data, meta: {currentPage: page, perPage: pageSize, totalCount, totalPage}}
  setTimeout(() => res.json(response), 1000)
}
