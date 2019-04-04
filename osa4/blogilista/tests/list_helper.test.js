const listHelper = require('../utils/list_helper')
const blogs = listHelper.blogs
const oneBlog = listHelper.listWithOneBlog

test('dummy returns one', () => {
  const blogs = []

  const result = listHelper.dummy(blogs)
  expect(result).toBe(1)
})

describe('total likes', () => {

  test('when list has only one blog equals the likes of that', () => {
    const result = listHelper.totalLikes(oneBlog)
    expect(result).toBe(5)
  })

  test('when list has multiple blogs equals the likes sum of them', () => {
    const result = listHelper.totalLikes(blogs)
    expect(result).toBe(36)
  })
})

describe('favorite blog', () => {
  test('when list has multiple blogs the most favorite one equals', () => {
    const result = listHelper.favoriteBlog(blogs)
    expect(result).toEqual(blogs[2])
  })
  
  test('when list has multiple bloggers the favorite blogger equals ', () => {
    const result = listHelper.mostLikes(blogs)
    const author = {
      author: "Edsger W. Dijkstra",
      likes: 17
    }
    expect(result).toEqual(author)
  })
})

describe('most blogs', () => {

  test('when list has multiple blogs by same author equals the author with most blogs', () => {
    const result = listHelper.mostBlogs(blogs)
    const author = {
      author: "Robert C. Martin",
      blogs: 3
    }

    expect(result).toEqual(author)
    
  })
})

