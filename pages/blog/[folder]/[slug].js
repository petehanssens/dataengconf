import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import SEO from "../../../components/seo";
import SyntaxHighlighter from 'react-syntax-highlighter'

// import { Nav, Button } from '../../components'

const components = { SyntaxHighlighter }

const PostPage = ({ frontMatter: { title, date, category, description, thumbnailUrl, author, AuthorImage }, mdxSource }) => {
  return (
    <>
      <SEO
      title={title}
      description={description}
      image={thumbnailUrl}
      />
      <div className="relative py-16 bg-white overflow-hidden">
        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
          <div className="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
          </div>
        </div>
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="prose text-lg max-w-prose mx-auto" id="blogpost">
            <h1>
              <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                {title}
              </span>
            </h1>
            <p>
              <span className="mt-2 block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">
                Category: {category}
              </span>
            </p>
            <p><span className="mt-2 block text-base text-center text-indigo-600 font-small tracking-wide">
                {date} by {author}          
              </span>
            </p>
            <div className="prose-img:rounded-2xl prose-img:border-4 mt-8 text-xl text-gray-500 leading-8">
              <MDXRemote {...mdxSource} components={components}/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const getStaticPaths = async () => {

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

  const paths = files.map(filename => ({
    params: {
      folder: filename.split('/')[1],
      slug: filename.split('/')[2].replace('.mdx', '')
    }
  }))

  return {
    paths,
    fallback: false
  }
}

const getStaticProps = async ({ params: { folder, slug } }) => {
  const markdownWithMeta = fs.readFileSync(path.join('posts/',
    folder + '/' + slug + '.mdx'), 'utf-8')

  const { data: frontMatter, content } = matter(markdownWithMeta)
  const mdxSource = await serialize(content)

  return {
    props: {
      frontMatter,
      folder,
      slug,
      mdxSource
    }
  }
}

export { getStaticProps, getStaticPaths }
export default PostPage