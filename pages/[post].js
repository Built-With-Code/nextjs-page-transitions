import Head from 'next/head'
import Navbar from '../components/Navbar'
import styles from '../styles/Post.module.css'
import posts from '../posts.json'
import { motion } from 'framer-motion'

export default function Post({ post }) {
  const easing = [0.6, -0.05, 0.01, 0.99]
  const fadeInUp = {
    initial: {
      y: 60,
      opacity: 0
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: easing
      }
    }
  }
  const fadeIn = {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: easing
      }
    }
  }

  return (
    <motion.div className={styles.container} initial='initial' animate='animate' exit={{ opacity: 0 }}>
      <Head>
        <title>Tech + Lifestyle Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <motion.h1 className={styles.title} variants={fadeInUp}>{post.title}</motion.h1>
        <motion.img className={styles.headerImg} src={post.image_url} alt="Google Home" variants={fadeIn} />

        <motion.div className={styles.content} variants={fadeIn}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam. Pellentesque id nibh tortor id aliquet lectus proin. Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam. Suscipit adipiscing bibendum est ultricies integer quis auctor elit sed. Dictum non consectetur a erat nam. Ultricies tristique nulla aliquet enim tortor at auctor urna. Facilisi nullam vehicula ipsum a arcu cursus vitae congue. Dui nunc mattis enim ut tellus. Eget lorem dolor sed viverra. Netus et malesuada fames ac turpis egestas. Lectus nulla at volutpat diam ut venenatis. Aenean euismod elementum nisi quis eleifend. Tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse. Gravida in fermentum et sollicitudin ac orci phasellus egestas. Congue quisque egestas diam in arcu. Vivamus arcu felis bibendum ut tristique et egestas quis ipsum. Eget mi proin sed libero enim sed faucibus turpis. Condimentum id venenatis a condimentum.</p>

          <p>Pharetra vel turpis nunc eget lorem. Cras fermentum odio eu feugiat pretium nibh ipsum. Mattis aliquam faucibus purus in massa. Nec nam aliquam sem et tortor consequat id porta. Tellus in metus vulputate eu. Rhoncus urna neque viverra justo nec ultrices dui sapien eget. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Morbi quis commodo odio aenean sed adipiscing diam donec. Rutrum tellus pellentesque eu tincidunt. Viverra mauris in aliquam sem fringilla ut morbi tincidunt. Pellentesque elit ullamcorper dignissim cras. Viverra suspendisse potenti nullam ac tortor. At tellus at urna condimentum mattis pellentesque id nibh. Nec feugiat in fermentum posuere urna nec tincidunt praesent semper. Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna. Risus feugiat in ante metus dictum at tempor commodo ullamcorper. Ac tincidunt vitae semper quis lectus nulla. Pretium fusce id velit ut tortor pretium viverra suspendisse. Ullamcorper dignissim cras tincidunt lobortis feugiat. Orci sagittis eu volutpat odio facilisis mauris.</p>

          <p>Mauris augue neque gravida in fermentum et sollicitudin ac. Ultrices mi tempus imperdiet nulla malesuada pellentesque. Donec enim diam vulputate ut pharetra. Sapien faucibus et molestie ac feugiat sed lectus vestibulum mattis. Sed felis eget velit aliquet sagittis id consectetur purus. Ornare aenean euismod elementum nisi quis eleifend. Dignissim cras tincidunt lobortis feugiat vivamus at. Viverra nam libero justo laoreet sit amet. Odio facilisis mauris sit amet massa vitae tortor condimentum. Maecenas pharetra convallis posuere morbi leo urna molestie at. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Duis ultricies lacus sed turpis.</p>
        </motion.div>
      </main>
    </motion.div>
  )
}

export async function getStaticPaths() {
  const paths = posts.map(post => ({
    params: { post: post.id }
  }))

  return {
    paths,
    fallback: true
  }
}

export async function getStaticProps({ params }) {
  const postId = params.post
  const post = posts.find(post => post.id === postId)
  return {
    props: {
      post: post
    }
  }
}
