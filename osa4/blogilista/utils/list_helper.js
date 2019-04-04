const dummy = (blogs) => {
  return 1;
}

const totalLikes = (blogs) => {
  const reducer = (sum, blog) => {
    return sum + blog.likes
  }
  return blogs.reduce(reducer, 0);
}

const favoriteBlog = (blogs) => {
  const reducer = (favoriteBlog, nextBlog) => {
    return favoriteBlog.likes < nextBlog.likes ? nextBlog: favoriteBlog
  }

  return blogs.reduce(reducer, blogs[0]);
}

const mostBlogs = (blogs) => {
  let authors = []
  let mostBlogs

  blogs.forEach(blog => {
    let name;
    let index;
    if (authors.length > 0) {
      index  = authors.findIndex(at => at.author === blog.author)
      name = authors[index]
    }

    if (name !== undefined) {
      name.blogs++
      authors[index] = name; 
      
    } else {
      name = {
        author: blog.author,
        blogs: 1
      }
      authors.push(name)
    }
    if (mostBlogs === undefined || name.blogs > mostBlogs.blogs) {
      mostBlogs = name;
    }
  })

  return mostBlogs
}

const mostLikes = (blogs) => {
  let authors = []
  let mostLikes

  blogs.forEach(blog => {
    let name
    let index
    if (authors.length > 0) {
      index = authors.findIndex(at => at.author === blog.author)
      name = authors[index]
    }

    if (name !== undefined) {
      name.likes += blog.likes
      authors[index] = name
    } else {
      name = {
        author: blog.author,
        likes: blog.likes
      }
      authors.push(name)
    }
    if (mostLikes === undefined || name.likes > mostLikes.likes) {
      mostLikes = name
    }
  })
  return mostLikes
}
const BlogWithNoTitle = {
  author: 'Joni Suominen',
  url: 'NoTitle.com'
}
const BlogWithNoUrl = {
  author: 'Joni Suominen',
  title: 'NoUrl'
}
const validBlog = {
  title: 'GameBoy Emulator debugging',
  author: 'Joni Suominen',
  url: 'github.com/JoniSuominen',
} 
const blogs = [
  {
    _id: '5a422a851b54a676234d17f7',
    title: 'React patterns',
    author: 'Michael Chan',
    url: 'https://reactpatterns.com/',
    likes: 7,
    __v: 0
  },
  {
    _id: '5a422aa71b54a676234d17f8',
    title: 'Go To Statement Considered Harmful',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 5,
    __v: 0
  },
  {
    _id: '5a422b3a1b54a676234d17f9',
    title: 'Canonical string reduction',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html',
    likes: 12,
    __v: 0
  },
  {
    _id: '5a422b891b54a676234d17fa',
    title: 'First class tests',
    author: 'Robert C. Martin',
    url: 'http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll',
    likes: 10,
    __v: 0
  },
  {
    _id: '5a422ba71b54a676234d17fb',
    title: 'TDD harms architecture',
    author: 'Robert C. Martin',
    url: 'http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html',
    likes: 0,
    __v: 0
  },
  {
    _id: '5a422bc61b54a676234d17fc',
    title: 'Type wars',
    author: 'Robert C. Martin',
    url: 'http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html',
    likes: 2,
    __v: 0
  }  
]

const listWithOneBlog = [
  {
    _id: '5a422aa71b54a676234d17f8',
    title: 'Go To Statement Considered Harmful',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 5,
    __v: 0
  }
]

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  blogs,
  mostBlogs,
  mostLikes,
  validBlog,
  listWithOneBlog,
  BlogWithNoTitle,
  BlogWithNoUrl
}