import { Account, Avatars, Client, Databases, ID, Query } from 'react-native-appwrite'

export const config = {
  endpoint: 'https://cloud.appwrite.io/v1',
  platform: 'com.wad.cull',
  projectId: '6768fe1900160299ee78',
  databaseId: '6777265c001a5fcec5b0',
  userCollectionId: '677726900031d6e069ef',
  booksCollectionId: '677726c3000a42c409f6',
  storageId: '67690e560034f2793087',
}

const client = new Client()

client.setEndpoint(config.endpoint).setProject(config.projectId).setPlatform(config.platform)

const account = new Account(client)
const avatars = new Avatars(client)
const databases = new Databases(client)

export const createUser = async (email: any, password: any, username: any) => {
  try {
    const userAccount = await account.create(ID.unique(), email, password, username)
    if (!userAccount) throw new Error('Error: Could not create user')

    const avatar = avatars.getInitials(username)

    await singIn(email, password)

    const newUser = await databases.createDocument(
      config.databaseId,
      config.userCollectionId,
      ID.unique(),
      {
        accountId: userAccount.$id,
        username,
        email,
        avatar,
      }
    )
    return newUser
  } catch (error) {
    console.log(error)
    throw new Error('Error creating user')
  }
}

export const singIn = async (email: any, password: any) => {
  try {
    await account.deleteSession('current')
    const session = await account.createEmailPasswordSession(email, password)
    if (!session) throw new Error('Error: Could not create session')
    return session
  } catch (error: any) {
    console.log(error.message)
    throw new Error('Error creating session')
  }
}

export const getCurrentUser = async () => {
  try {
    const currentAccount = await account.get()
    if (!currentAccount) throw new Error('Error getting current account')

    const currentUser = await databases.listDocuments(config.databaseId, config.userCollectionId, [
      Query.equal('accountId', currentAccount.$id),
    ])
    if (!currentUser) throw new Error('Error getting current user')

    return currentUser.documents[0]
  } catch (error) {
    console.log(error)
    throw new Error('Error getting current user')
  }
}

export const getBooks = async () => {
  try {
    const books = await databases.listDocuments(config.databaseId, config.booksCollectionId)
    if (!books) throw new Error('Error getting books')
    return books.documents
  } catch (error) {
    console.log(error)
    throw new Error('Error getting books')
  }
}

export const searchBooks = async (query: any) => {
  try {
    const posts = await databases.listDocuments(config.databaseId, config.booksCollectionId, [
      Query.search('title', query),
    ])
    console.log(posts.documents)
    return posts.documents
  } catch (error) {
    console.log(error)
    throw new Error('Error getting books')
  }
}
