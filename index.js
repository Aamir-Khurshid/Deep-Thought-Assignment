const el = document.querySelector('.notice');
el.textContent = el.textContent.split('').join('\n');

const collJb = document.querySelector('.collapsed-jb');
const collJbArrow = document.querySelector('.collapsed-jb-arrow');
const about = document.querySelector('.about');
const notification = document.querySelector('.notification');


fetch("data.json")
  .then(response => response.json())
  .then(data => {
    const cards = document.getElementById("cards");
    const aboutHeadTitle = document.querySelector('.about-head');
    const aboutInfo = document.querySelector('.about-info');
    const tasks = data.tasks;
    const assets = tasks[0].assets;



    collJbArrow.addEventListener('click', () => {
      collJb.classList.toggle('expanded-jb');
      about.classList.toggle('margin-intact');
      notification.classList.toggle('close-notification');

      if (collJb.classList.contains('expanded-jb')) {
        collJbArrow.innerHTML = `<i class="fa-solid fa-circle-arrow-left white"></i>`;
        notification.innerHTML = `<div class="open-notification">${tasks[0].task_title}
        <ul>
          <li>${assets[0].asset_title}</li>
          <li>${assets[1].asset_title}</li>
          <li>${assets[2].asset_title}</li>
          <li>${assets[3].asset_title}</li>
        </ul>
        </div>
        `
      } else {
        collJbArrow.innerHTML = `<i class="fa-solid fa-circle-arrow-right white"></i>`;
        notification.innerHTML = `0`
      }
    });



    aboutHeadTitle.innerHTML = `
    <h1>${data.title}</h1>
    <button>Submit Task</button>
    `
    aboutInfo.innerHTML = `
    <h3>${tasks[0].task_title}</h3>
    <h4>${tasks[0].task_description}</h4>
    `

    cards.innerHTML = `
      <div class="card">
        <div class="card-header">
          <h2>${assets[0].asset_title}</h2>
          <i class="fa-solid fa-circle-info"></i>
        </div>
        <div class= "descHold">
          <span>Description:</span>
          <h4>${assets[0].asset_description}</h4>
        </div>
        <iframe src = '${assets[0].asset_content}'></iframe>
      </div>


      <div class="card">
        <div class="card-header">
          <h2>${assets[1].asset_title}</h2>
          <i class="fa-solid fa-circle-info"></i>
        </div>
        <div class= "descHold">
          <span>Description:</span>
          <h4>${assets[1].asset_description}</h4>
        </div>
        <div class = "thread-cont">
          <div class = "thread-head">
            <span><i class="fa-solid fa-angle-up"></i><span>
            <span><h2>Thread A</h2></span>
          </div>
          <div class="thread-cards-cont flex">
              <div class="thread-card">
                <h3>Sub thread 1</h3>
                <textarea>Enter text here</textarea>
              </div>
              <div class="thread-card">
                <h3>Sub Interpretation 1</h3>
                <textarea>Enter text here</textarea>
              </div>
          </div>
          <div class="option-list flex">
            <div class="option-list-icon">
              <i class="fa-solid fa-lightbulb"></i>
              <i class="fa-regular fa-message"></i>
              <i class="fa-solid fa-clipboard-question"></i>
              <i class="fa-solid fa-leaf"></i>
            </div>
            <div class="dropdown-cont">
              <span>Select Category  <i class="fa-solid fa-angle-down"></i></span>
              <span>Select Process <i class="fa-solid fa-angle-down"></i></span>            
            </div>
          </div>
          <button><i class="fa-solid fa-plus"></i> Sub-Thread</button>
          <div class="summary-cont">
            <div class="sum-head">Summary for Thread A</div>
            <textarea>Enter Text Area</textarea>
          </div>
        </div>
      </div>


      <div class="card">
        <div class="card-header">
          <h2>${assets[2].asset_title}</h2>
          <i class="fa-solid fa-circle-info"></i>
        </div>
        <div class= "descHold">
          <span>Description:</span>
          <h4>${assets[2].asset_description}</h4>
        </div>
        <div class="card-in-title">
          <h2>Title</h2>
          <textarea></textarea>
        </div>
        <div class="card-in-content">
          <h2>Content</h2>
          <ul class="cont-list flex">
            <li>File<li>
            <li>Edit<li>
            <li>View<li>
            <li>Insert<li>
            <li>Format<li>
            <li>Tools<li>
            <li>Table<li>
            <li>Help<li>
          </ul>
          <ul class="cont-list mb-20 flex">
            <li><i class="fa-solid fa-angle-left"></i><li>
            <li><i class="fa-solid fa-angle-right"></i><li>
            <li><i class="fa-solid fa-maximize"></i><li>
            <li>Paragraph<li>
            <li><i class="fa-solid fa-ellipsis"></i><li>

          </ul>
          <textarea></textarea>
        </div>
      </div>


      <div class="card">
        <div class="card-header">
          <h2>${assets[3].asset_title}</h2>
          <i class="fa-solid fa-circle-info"></i>
        </div>
        <div class= "descHold">
          <span>Description:</span>
          <h4> ${assets[3].asset_description}</h4>
        </div>
        <div class="introduction-cont">
          <div class="intro-head">
            <i class="fa-solid fa-angle-up"></i>
            <span>Introduction</span>
          </div>
          <div class="intro-desc">
            The 4SA Method, How to bring a idea into progress?
          </div>
          <div class="see-more">See More</div>
        </div>
        <div class="thread-cont-two">
          <div class="intro-head bg-white">
            <i class="fa-solid fa-angle-up"></i>
            <span>Thread A</span>
          </div>
          <div class="intro-desc">
            How are you going to develop your stratergy ? Which method are you going to use to develop a stratergy ? What if the project is lengthy?
          </div>
          <div class="see-more-again">See More</div>
        </div>
        <div class="example-cont">
          <div class="intro-head bg-white">
            <i class="fa-solid fa-angle-up"></i>
            <span>Example 1</span>
          </div>
          <div class="intro-desc">
            You have a concept , How will you put into progress?
          </div>
        </div>
      </div>
    `;
  })
  .catch(error => console.error("Error loading JSON:", error));
