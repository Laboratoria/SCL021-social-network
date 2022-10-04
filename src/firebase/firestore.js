import { db, auth } from "./init.js";
import {
  collection,
  addDoc,
  onSnapshot,
  /* getDocs, */
  Timestamp,
  deleteDoc,
  query,
  orderBy,
  getDoc,
  updateDoc,
  arrayUnion, 
  arrayRemove,
  doc
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";

console.log({ auth: auth.currentUser });
export const user = auth.currentUser;

window.addEventListener("DOMContentLoaded", async () => {
  onGetSnapShot((querySnapshot) => {
    let html = "";
    const containerFeed = document.querySelector(".feeds");
    querySnapshot.forEach((doc) => {
      // console.log(new Date (doc.data().date.seconds*1000));
      const post = doc.data();
      html += `
      <div class='containerPost'>
        <div class="feed">           
        <div class="head">
         <div class="user">
         <div class="profile-photo">
           <img src="/img/profile-13.jpg">
         </div>
         <div class="info">
         <h3> ${post.userName} </h3>
         <small> ${new Date (doc.data().date.seconds*1000)} </small>
         </div>
        </div>
       <span class="edit" >
        <button class="fa-solid fa-ellipsis fa-2x" data-id="${doc.id}"></button>
        </span>
      </div>
     <div class="action-buttons">
      <div class="interaction-buttons">
        <span><i class="fa-regular fa-heart"></i></span>
        <span><i class="fa-regular fa-comment"></i></span>
        <span><i class="fa-solid fa-share"></i></span>
      </div>
      <div class="bookmark">
        <span<i class="uil uil-bookmark"></i></span>
      </div>
      </div>
      <p><b> ${post.userName} </b>${post.description}
      </div>
     </div>
      `;
      containerFeed.innerHTML = html;
      const deletePost = (id) => deleteDoc(doc(db, "Posts", id));
      const deletePostFeed = containerFeed.querySelector('.fa-ellipsis')
      deletePostFeed.addEventListener('click', ({target: {dataset}}) => {
        deletePost(dataset.id)
        console.log(deletePost)
        // console.log(dataset.id)
      })
      containerFeed.querySelectorAll('.fa-heart').forEach((element) => element.addEventListener('click', (e) => {
        const like = e.target.dataset.idlikes;
        const selectedPost = e.target;
        console.log(selectedPost);
        // selectedPost.classList.remove("fa-regular fa-heart");
        // selectedPost.classList.add("fa-solid fa-heart")
        // likes(like, auth.currentUser.uid);
      }))
    });
  });
});



export const savePost = (description) => {
  addDoc(collection(db, "Posts"), {
    description,
    date: Timestamp.fromDate(new Date()),
    likes: [],
    likesC : 0,
    userName:
      auth.currentUser.displayName != null
        ? auth.currentUser.displayName
        : auth.currentUser.email,
  });
};

export const onGetSnapShot = (callback) => onSnapshot(collection(db, "Posts"), callback);

const q = query(collection(db, "Posts"), orderBy("date", "desc"));





// async function likes(id, user) {
//   const postlike = doc(db, 'Posts', id);
//   const dataDocs = await getDoc(postlike);
//   const allData = dataDocs.data();
//   if (allData.likes.includes(user)) {
//     await updateDoc(postlike, {
//       likes: arrayRemove(user),
//       likesC: increment(-1),
//     });
//   } else {
//     await updateDoc(postlike, {
//       likes: arrayUnion(user),
//       likesC: increment(1),
//     });
//   }
// }

////LIKES///////////


