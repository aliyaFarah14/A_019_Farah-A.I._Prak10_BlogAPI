import PocketBase from 'pocketbase'

const pb = new PocketBase('http://127.0.0.1:8090')


if (typeof window !== 'undefined') {
  pb.authStore.loadFromCookie(document.cookie)

  pb.authStore.onChange(() => {
    document.cookie = pb.authStore.exportToCookie({
      httpOnly: false,
      sameSite: 'Lax',
      path: '/',
    })
  })
}

export default pb
