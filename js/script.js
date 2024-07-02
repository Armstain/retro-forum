const loadData = async (searchText) => {
    const res = await fetch (`https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchText}`);
    const data = await res.json();
    const posts = data.posts
    displayPosts(posts);
}


const displayPosts = (posts) => {
    // console.log(posts);
    const postContainer = document.getElementById('post-container');
    postContainer.innerHTML = ''; 

    posts.forEach(post => {
        // console.log(post);
        const postCard = document.createElement('div');
        postCard.classList = `flex-3 p-9 bg-[#F3F3F5] rounded-box hover:bg-violet-100`
        postCard.innerHTML = `<div class="flex gap-3 ">
        <div class="avtar"> 
          <div class="avatar ${post.isActive ? 'online' : 'offline'}">
            <div class="w-24 rounded-full">
              <img
                src="${post.image}"
              />
            </div>
          </div>
        </div>
        <div class= "w-full">
          <div class="flex gap-4">
            <h1>#${post.category}</h1>
            <h1>Author: ${post.author.name}</h1>
          </div>
          <div class="my-3">
            <h1 class="font-bold text-[#12132D] text-xl">
              ${post.title}
            </h1>
          </div>
          <div>
            <h1>
              ${post.description}
            </h1>
          </div>
          <hr class="my-3" />
          <div class="  flex justify-between">
            <div class="flex gap-7">
              <div class="flex gap-2 items-center">
                <svg
                  width="22.500000"
                  height="21.333374"
                  viewBox="0 0 22.5 21.3334"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <desc>Created with Pixso.</desc>
                  <defs />
                  <path
                    id="Vector"
                    d="M6.58334 6.58337L15.9167 6.58337M6.58334 11.25L13.5833 11.25M4.25 17.0834C3.32174 17.0834 2.4315 16.7146 1.77512 16.0582C1.11875 15.4019 0.75 14.5116 0.75 13.5834L0.75 4.25C0.75 3.32178 1.11875 2.43152 1.77512 1.77515C2.4315 1.11877 3.32174 0.75 4.25 0.75L18.25 0.75C19.1783 0.75 20.0685 1.11877 20.7249 1.77515C21.3812 2.43152 21.75 3.32178 21.75 4.25L21.75 13.5834C21.75 14.5116 21.3812 15.4019 20.7249 16.0582C20.0685 16.7146 19.1783 17.0834 18.25 17.0834L14.75 17.0834L11.25 20.5834L7.75 17.0834L4.25 17.0834Z"
                    stroke="#12132D"
                    stroke-opacity="0.600000"
                    stroke-width="1.500000"
                    stroke-linejoin="round"
                  />
                </svg>
                <h1>${post.comment_count}</h1>
              </div>
              <div class="flex gap-2 items-center">
                <svg
                  width="22.500000"
                  height="15.500000"
                  viewBox="0 0 22.5 15.5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <desc>Created with Pixso.</desc>
                  <defs />
                  <path
                    id="Vector"
                    d="M9.60009 9.3999C10.0377 9.83752 10.6312 10.0834 11.25 10.0834C11.8688 10.0834 12.4623 9.83752 12.8999 9.3999C13.3375 8.96228 13.5833 8.3689 13.5833 7.75C13.5833 7.1311 13.3375 6.53772 12.8999 6.1001C12.4623 5.66248 11.8688 5.41663 11.25 5.41663C10.6312 5.41663 10.0377 5.66248 9.60009 6.1001C9.1625 6.53772 8.91667 7.1311 8.91667 7.75C8.91667 8.3689 9.1625 8.96228 9.60009 9.3999ZM11.25 14.75C7.05 14.75 3.55 12.4166 0.75 7.75C3.55 3.08337 7.05 0.75 11.25 0.75C15.45 0.75 18.95 3.08337 21.75 7.75C18.95 12.4166 15.45 14.75 11.25 14.75Z"
                    stroke="#12132D"
                    stroke-opacity="0.600000"
                    stroke-width="1.500000"
                    stroke-linejoin="round"
                  />
                </svg>
                <h1>${post.view_count}</h1>
              </div>
              <div class="flex gap-2 items-center">
                <svg
                  width="22.500000"
                  height="22.500000"
                  viewBox="0 0 22.5 22.5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <desc>Created with Pixso.</desc>
                  <defs />
                  <path
                    id="Vector"
                    d="M1.54926 15.2682C2.07694 16.5421 2.85036 17.6996 3.82538 18.6746C4.80039 19.6497 5.95791 20.4231 7.23183 20.9507C8.50574 21.4784 9.87112 21.75 11.25 21.75C12.6289 21.75 13.9943 21.4784 15.2682 20.9507C16.5421 20.4231 17.6996 19.6497 18.6746 18.6746C19.6496 17.6996 20.4231 16.5421 20.9507 15.2682C21.4784 13.9943 21.75 12.6289 21.75 11.25C21.75 9.87109 21.4784 8.50574 20.9507 7.23181C20.4231 5.95789 19.6496 4.80042 18.6746 3.82544C17.6996 2.85034 16.5421 2.0769 15.2682 1.54932C13.9943 1.02161 12.6289 0.75 11.25 0.75C9.87112 0.75 8.50574 1.02161 7.23183 1.54932C5.95791 2.0769 4.80039 2.85034 3.82538 3.82544C2.85036 4.80042 2.07694 5.95789 1.54926 7.23181C1.02159 8.50574 0.75 9.87109 0.75 11.25C0.75 12.6289 1.02159 13.9943 1.54926 15.2682ZM11.25 5.41663L11.25 11.25L7.16666 11.25"
                    stroke="#12132D"
                    stroke-opacity="0.600000"
                    stroke-width="1.500000"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                  />
                </svg>
                <h1>${post.posted_time}</h1>
              </div>
            </div>
            <div>
                <button class="read-btn">
                        <svg
                          width="27.999817"
                          height="28.000000"
                          viewBox="0 0 27.9998 28"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                        >
                          <desc>Created with Pixso.</desc>
                          <defs />
                          <path
                            id="Vector"
                            d="M13.9997 0C6.26794 0 0 6.26819 0 13.9999C0 21.7314 6.26794 28 13.9997 28C21.7314 28 27.9998 21.7314 27.9998 13.9999C27.9998 6.26819 21.7314 0 13.9997 0ZM13.9999 4.91736L22.2846 10.0835L5.71533 10.0835L13.9999 4.91736ZM22.3878 18.333L22.387 18.333C22.387 19.1616 21.7154 19.833 20.8869 19.833L7.11301 19.833C6.28439 19.833 5.61295 19.1615 5.61295 18.333L5.61295 10.4122C5.61295 10.3246 5.62189 10.2394 5.63644 10.1556L13.5519 15.0914C13.5616 15.0974 13.572 15.1016 13.582 15.1072C13.5925 15.1129 13.6031 15.1185 13.6137 15.1239C13.6696 15.1527 13.7272 15.176 13.7861 15.1912C13.7922 15.1929 13.7982 15.1936 13.8043 15.1949C13.8689 15.2102 13.9343 15.2197 13.9997 15.2197L14.0002 15.2197C14.0006 15.2197 14.0011 15.2197 14.0011 15.2197C14.0664 15.2197 14.1318 15.2104 14.1964 15.1949C14.2025 15.1935 14.2086 15.1929 14.2146 15.1912C14.2734 15.176 14.3308 15.1527 14.387 15.1239C14.3976 15.1185 14.4083 15.1129 14.4187 15.1072C14.4286 15.1016 14.4391 15.0974 14.4488 15.0914L22.3643 10.1556C22.3788 10.2394 22.3878 10.3243 22.3878 10.4122L22.3878 18.333Z"
                            fill="#10B981"
                            fill-opacity="1.000000"
                            fill-rule="nonzero"
                          />
                        </svg>
                      </button>
                    </div>
          </div>
        </div>
      </div>`;
      
      postContainer.appendChild(postCard);

      //hide loading Spinner
      setTimeout ( () => {
        toggleLoadingSpinner(false);
      }, 2000)
      
    })

    const readBtn = document.getElementsByClassName('read-btn');


      for (const btn of readBtn) {
        btn.addEventListener('click', function(event){
          
          const commentCount = document.getElementById('comment-count');
          commentCount.innerText = parseInt(commentCount.innerText) + 1;
          
          const TitleName = event.target.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[3].childNodes[3].innerText;
          const PostViews = event.target.parentNode.parentNode.parentNode.childNodes[1].childNodes[3].innerText;
          console.log(TitleName);
          const selectedContainer = document.getElementById('selected-container' );  
          
          const div = document.createElement('div');
          div.classList = `class="mt-3 bg-white p-4 rounded-lg flex`;

          div.innerHTML = `<div class = mt-3>
          <div>
            <h1 class="font-bold text-[#12132D]">
              ${TitleName}
            </h1>
          </div>
          <div class ="flex">
            <div class="flex gap-2 items-center">
              <svg
                width="22.500000"
                height="15.500000"
                viewBox="0 0 22.5 15.5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <desc>Created with Pixso.</desc>
                <defs />
                <path
                  id="Vector"
                  d="M9.60009 9.3999C10.0377 9.83752 10.6312 10.0834 11.25 10.0834C11.8688 10.0834 12.4623 9.83752 12.8999 9.3999C13.3375 8.96228 13.5833 8.3689 13.5833 7.75C13.5833 7.1311 13.3375 6.53772 12.8999 6.1001C12.4623 5.66248 11.8688 5.41663 11.25 5.41663C10.6312 5.41663 10.0377 5.66248 9.60009 6.1001C9.1625 6.53772 8.91667 7.1311 8.91667 7.75C8.91667 8.3689 9.1625 8.96228 9.60009 9.3999ZM11.25 14.75C7.05 14.75 3.55 12.4166 0.75 7.75C3.55 3.08337 7.05 0.75 11.25 0.75C15.45 0.75 18.95 3.08337 21.75 7.75C18.95 12.4166 15.45 14.75 11.25 14.75Z"
                  stroke="#12132D"
                  stroke-opacity="0.600000"
                  stroke-width="1.500000"
                  stroke-linejoin="round"
                />
              </svg>
              <div> <h1>${PostViews}</h1></div>
            </div>
          </div>
        </div>`;
          
          selectedContainer.appendChild(div); 
          
          
          
        })
          
          
       
      }
}

//handle search bar
const handleSearch = ( ) => {
  toggleLoadingSpinner(true);
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);
    loadData(searchText);
}
// loading Spinner
const  toggleLoadingSpinner = (isLoading) => {
  const loadingSpinner = document.getElementById('loading-spinner');
  loadingSpinner.classList.remove('hidden');
  if (isLoading){
    loadingSpinner.classList.remove('hidden');
  }
  else {
    loadingSpinner.classList.add('hidden');
  }
}



const loadPostData = async () => {  
  const res = await fetch ('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
  const LatestData = await res.json();
  const LatestPosts = LatestData
  displayLatestPosts(LatestPosts);
}

const displayLatestPosts = (LatestPosts) => {
  const latestPostContainer = document.getElementById('latestPost-container');
  LatestPosts.forEach(LatestPost => {
    const latestPostCard = document.createElement('div');
    // latestPostCard.classList = `card w-96 bg-base-100 shadow-xl`;
    latestPostCard.innerHTML = `<div>
    <div class="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src=${LatestPost.cover_image}
          alt="Shoes"
        />
      </figure>
      <div class="card-body">
        <div class="flex gap-2">
          <svg
            width="24.000000"
            height="24.000000"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <desc>Created with Pixso.</desc>
            <defs>
              <clipPath id="clip29_1881">
                <rect
                  id="Frame"
                  width="24.000000"
                  height="24.000000"
                  fill="white"
                  fill-opacity="0"
                />
              </clipPath>
            </defs>
            <rect
              id="Frame"
              width="24.000000"
              height="24.000000"
              fill="#FFFFFF"
              fill-opacity="0"
            />
            <g clip-path="url(#clip29_1881)">
              <path
                id="Vector"
                d="M4.58578 5.58582C4.96086 5.21069 5.46957 5 6 5L18 5C18.5304 5 19.0391 5.21069 19.4142 5.58582C19.7893 5.96088 20 6.46954 20 7L20 19C20 19.5305 19.7893 20.0391 19.4142 20.4142C19.0391 20.7893 18.5304 21 18 21L6 21C5.46957 21 4.96086 20.7893 4.58578 20.4142C4.21071 20.0391 4 19.5305 4 19L4 7C4 6.46954 4.21071 5.96088 4.58578 5.58582Z"
                stroke="#12132D"
                stroke-opacity="0.600000"
                stroke-width="1.500000"
                stroke-linejoin="round"
              />
              <path
                id="Vector"
                d="M16 3L16 7"
                stroke="#12132D"
                stroke-opacity="0.600000"
                stroke-width="1.500000"
                stroke-linejoin="round"
                stroke-linecap="round"
              />
              <path
                id="Vector"
                d="M8 3L8 7"
                stroke="#12132D"
                stroke-opacity="0.600000"
                stroke-width="1.500000"
                stroke-linejoin="round"
                stroke-linecap="round"
              />
              <path
                id="Vector"
                d="M4 11L20 11"
                stroke="#12132D"
                stroke-opacity="0.600000"
                stroke-width="1.500000"
                stroke-linejoin="round"
                stroke-linecap="round"
              />
              <path
                id="Vector"
                d="M11.2929 16.7071C11.4804 16.8947 11.7348 17 12 17C12.2652 17 12.5196 16.8947 12.7071 16.7071C12.8946 16.5196 13 16.2652 13 16C13 15.7348 12.8946 15.4804 12.7071 15.2929C12.5196 15.1053 12.2652 15 12 15C11.7348 15 11.4804 15.1053 11.2929 15.2929C11.1054 15.4804 11 15.7348 11 16C11 16.2652 11.1054 16.5196 11.2929 16.7071Z"
                stroke="#12132D"
                stroke-opacity="0.600000"
                stroke-width="1.500000"
                stroke-linejoin="round"
              />
            </g>
          </svg>

          <h1>${LatestPost.author.posted_date? LatestPost.author.posted_date : 'unknown'}</h1>
        </div>
        <h2 class="card-title">
          ${LatestPost.title}
        </h2>
        <p>
          ${LatestPost.description}
        </p>
        <div class="card-actions">
          <div class="flex gap-3">
            <img
              class="w-10 rounded-full"
              src="${LatestPost.profile_image}"
            />
            <div>
              <h1 class="font-bold">${LatestPost.author.name}</h1>
              <h1 class="text-sm">${LatestPost.author.designation ? LatestPost.author.designation : 'unknown' }</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`;
    latestPostContainer.appendChild(latestPostCard);
  })
}
loadPostData();


