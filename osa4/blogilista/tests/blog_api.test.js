const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const helper = require('../utils/list_helper')
const api = supertest(app)
const Blog = require('../models/blog')

beforeEach(async () => {
  await Blog.deleteMany({})

  const blogObjects = helper.blogs
    .map(blog => new Blog(blog))

  const promiseArray = blogObjects.map(blog => blog.save())
  await Promise.all(promiseArray)
  
})

test('blogs are returned as json', async () => {
  await api
    .get('/api/blogs')
    .expect(200)  
    .expect('Content-Type', /application\/json/)
})

test('the identifier is called id', async () => {

  const response = await api.get('/api/blogs')
  response.body.forEach(blog => {
    expect(blog._id).not.toBeDefined()
    expect(blog.id).toBeDefined()
  })
})

test('a valid blog can be added', async() => {

  
  await api
    .post('/api/blogs')
    .send(helper.validBlog)
    .expect(200)
    .expect('Content-Type', /application\/json/)

  const response = await api.get('/api/blogs')

  const titles = response.body.map(r => r.title)
  expect(response.body.length).toBe(helper.blogs.length + 1)
  
  expect(titles).toContain('GameBoy Emulator debugging')
})

test(' a blog with no likes defined has zero likes', async() => {
  await api
    .post('/api/blogs')
    .send(helper.validBlog)
    .expect(200)
    .expect('Content-Type', /application\/json/)

  const response = await api.get('/api/blogs')
  const blog = response.body.filter(blog => blog.title === helper.validBlog.title)

  expect(blog[0].likes).toBe(0)
})

test('a blog with no title can not be added', async () => {
  await api
    .post('/api/blogs')
    .send(helper.BlogWithNoTitle)
    .expect(400)
    .expect('Content-Type', /application\/json/)

  const response = await api.get('/api/blogs')
  const url = response.body.map(blog => blog.url)
  expect(url).not.toContain('NoTitle.com')
})


test('a blog with no url can not be added', async () => {
  await api
    .post('/api/blogs')
    .send(helper.BlogWithNoUrl)
    .expect(400)
    .expect('Content-Type', /application\/json/)

  const response = await api.get('/api/blogs')
  const titles = response.body.map(blog => blog.title)
  expect(titles).not.toContain('NoURL')
})


afterAll(() => {
  mongoose.connection.close()
})