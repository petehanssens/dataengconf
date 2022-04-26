import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import Image from 'next/image'
import SEO from "../components/seo";

const Blog = ({ posts }) => {
  return (
    <>
      <SEO
      keywords={[`dataengbytes`]}
      title="From the blog: Our team of data engineering experts share their insights"
      description="Our data engineering experts are sharing their expertise and insights in vaiour things cloud related. "
      image="/images/dataEngLogos/DataEngBytes.Circle2022.150ppi.png"
      />
      <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">From the blog</h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Here from our amazing community experts and organisers!
            </p>
          </div>
          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            {posts.map((post, index) => (
              <div key={index} className="flex flex-col rounded-2xl shadow-lg hover:shadow-xl overflow-hidden transition duration-200 ease-in">
                <div className="flex-shrink-0">
                  <img className="h-48 w-full object-cover" src={post.frontMatter.thumbnailUrl} alt="" />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600">{post.frontMatter.category}
                    </p>
                    <a href={'/blog/' + post.slug} passhref="true" key={index} className="block mt-2">
                      <p className="text-xl font-semibold text-gray-900">{post.frontMatter.title}</p>
                      <p className="mt-3 text-base text-gray-500">{post.frontMatter.description}</p>
                    </a>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                        <img className="h-10 w-10 rounded-full" src={post.frontMatter.AuthorImage} alt="" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">{post.frontMatter.author}
                      </p>
                      <div className="flex space-x-1 text-sm text-gray-500">
                        <time dateTime={post.frontMatter.date}>{post.frontMatter.date}</time>
                        <span aria-hidden="true">&middot;</span>
                        <span>{post.frontMatter.readingTime} read</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export const getStaticProps = async () => {
  const getAllFiles = function(dirPath, arrayOfFiles) {
    const files = fs.readdirSync(path.join(dirPath))
  
    arrayOfFiles = arrayOfFiles || []
  
    files.forEach(function(file) {
      if (fs.statSync(dirPath + "/" + file).isDirectory()) {
        arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles)
      } else {
        arrayOfFiles.push(path.join(dirPath, "/", file))
      }
    })
  
    return arrayOfFiles
  }

  const files = getAllFiles('posts')
  // const files = fs.readdirSync(path.join('posts'))

  const posts = files.map(filename => {
    // console.log('filename: ',filename)
    const cleanPath = filename.replace('posts/','')
    const markdownWithMeta = fs.readFileSync(filename, 'utf-8')
    const { data: frontMatter } = matter(markdownWithMeta)

    return {
      frontMatter,
      slug: cleanPath.split('.')[0]
    }
  })

  return {
    props: {
      posts
    }
  }
}

export default Blog