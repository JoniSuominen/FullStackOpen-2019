const blogsRouter = require('express').Router()
const Blog = require('../models/blog')

blogsRouter.get('/', async (request, response) => {
  const blogs = await Blog.find({})

  response.json(blogs.map(blog => blog.toJSON()))
})

blogsRouter.post('/', async (request, response, next) => {
  const body = request.body
  try {

    
    if (body.title === undefined || body.url === undefined) {
      return response.status(400).json({error: 'content missing'})
    }

    const blog = new Blog({
      ...body, likes: body.likes || 0
    })

    const savedBlog = await blog.save()
    response.json(savedBlog.toJSON())
  } catch (exception) {
    next(exception)
  }
})

module.exports = blogsRouter