import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

/**
 *
 *
 *
 * Put your firebaseCongig file here
 *
 *
 *
 */

//init firebase
// firebase.initializeApp(firebaseConfig)

//init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

//firebase timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }
