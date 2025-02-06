
const form_content = document.getElementById('container');
const form = document.getElementById('form');
const remove_change_btn_container = document.getElementById('remove-change-btn-container');
const input_instruction = document.getElementById('input-instruction');
const dropArea = document.getElementById('drop-area');
const uploadHint = document.getElementById('uploadHint');
const upload_icon = document.getElementById('upload-icon');
const fileInput = document.getElementById('file-input');
const removeImgBtn = document.getElementById('removeImgBtn');
const changeImgBtn = document.getElementById('changeImgBtn');
const fullName = document.getElementById('full-name');
const textHintContainer = document.getElementById('text-hint-container');
const textHintContainer2 = document.getElementById('text-hint-container2');
const textHintContainer3 = document.getElementById('text-hint-container3');
const email = document.getElementById('email')
const UserName = document.getElementById('Username')
const info_icon = document.getElementById('info-icon')
const textHint = document.getElementById('text-hint')
const textHint2 = document.getElementById('text-hint2')
const textHint3 = document.getElementById('text-hint3')
const GenerateBtn = document.getElementById('Generate-btn');
const regX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
const maxSize = 50000;
const defaultUploadIcon = './assets/images/icon-upload.svg';
const container2 = document.getElementById('container2');
const customerName = document.getElementById('customer-name');
const customerEmail = document.getElementById('customer-email');
const speakerName = document.getElementById('speaker-name');
const speakerHandle = document.getElementById('speaker-handle');
const speaker_img = document.getElementById('speaker-img');
const change  = document.getElementById('change');
const icon_info = document.getElementById('icon-info');
const body = document.body;
const mediaQuery = window.matchMedia('(max-width: 376px)');

const formData = {
    image: '',
    name: '',
    email: '',
    githubUsername: ''
};

function storeAndDisplayFormData() {
    formData.image = upload_icon.src;
    formData.name = fullName.value.trim();
    formData.email = email.value.trim();
    console.log(formData);    
    formData.githubUsername = UserName.value.trim();


    customerName.innerText = formData.name
    customerEmail.innerText = formData.email
    speakerName.innerText = formData.name
    speakerHandle.innerText = formData.githubUsername
    speaker_img.src = formData.image
}


function validateTextInputs(){
    let isValid = true;

    

    return isValid;
}

function resetUpload() {

    upload_icon.src = defaultUploadIcon;
    fileInput.value = ''; // Reset file input value
    input_instruction.style.display = 'block'
    remove_change_btn_container.style.display = 'none'
    uploadHint.innerText = 'Upload your photo (JPG or PNG, max size: 500KB).';
}

function validateFile(fileInput,uploadHint){
    // const file = input.files[0]
    // let isValid = true
}

// function displayUploadedImage(file) {

//     const reader = new FileReader();

//     reader.onload = function (e) {
//         upload_icon.src = e.target.result; // Set image source
//         remove_change_btn_container.style.display = 'flex'
//         input_instruction.style.display = 'none'
//         // messageAction.classList.add("hide");
//         console.log(e.target);
        
//     };

//     reader.readAsDataURL(file);
// }

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    storeAndDisplayFormData()
    
                form_content.style.display = 'none'
    container2.style.display = 'flex'
})


function handleMediaChange(mediaQuery) {
    if (mediaQuery.matches) {
      
      document.body.style.height = '812px'; // Adjust height as needed
      container2.style.height = '812px'
    } 
  }  
  handleMediaChange(mediaQuery); // Initial check
  
  mediaQuery.addEventListener('change', handleMediaChange);



dropArea.addEventListener('click',(e)=>{
    fileInput.click()
    
    
})

dropArea.addEventListener('dragover',(e)=>{
    fileInput.click()
})

dropArea.addEventListener('drop',(e)=>{
    e.preventDefault()
    const files = e.dataTransfer.files
    if (files.length > 0){
        fileInput.files = files
        validateFile(fileInput,uploadHint)
    }
})

fileInput.addEventListener('change',(e)=>{
    validateFile(fileInput,uploadHint)
    console.log(e.target.files[0].size);
    
    

    upload_icon.src=URL.createObjectURL(fileInput.files[0])
    remove_change_btn_container.style.display = 'flex';        input_instruction.style.display = 'none'
    if(fileInput.files[0].size >maxSize){
        upload_icon.src = defaultUploadIcon;
        uploadHint.innerText = 'File too large. Please upload a photo under 500KB';
        uploadHint.style.color = '#F57463'
        change.style.display = 'block'
        icon_info.style.display = 'none'
        remove_change_btn_container.style.display = 'none'
        input_instruction.style.display = 'block'
        setTimeout(() => {
             change.style.display = 'none'
             uploadHint.style.color = '#D1D0D5'
             icon_info.style.display = 'block'
             uploadHint.innerText = 'Upload your photo (JPG or PNG, max size: 500KB).'
        }, 2000);
    } 
})
removeImgBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    e.stopPropagation()
    resetUpload()
})
changeImgBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    e.stopPropagation()
    fileInput.click()
})







GenerateBtn.addEventListener('click', (e) => {
    let isValid = true;

    if (fullName.value.trim() === '') {
        showError(fullName, textHintContainer, textHint, 'input-error');
        isValid = false;
    }
    if (email.value.trim() === '' || !regX.test(email.value)) {
        showError(email, textHintContainer2, textHint2, 'input-error');
        isValid = false;
    }
    if (UserName.value.trim() === '') {
        showError(UserName, textHintContainer3, textHint3, 'input-error');
        isValid = false;
    }

    if (!isValid) {
        e.preventDefault(); // Prevent form submission if invalid
    }
});

function showError(inputElement, hintContainer, hintText, className) {
    hintContainer.style.display = 'flex';
    inputElement.classList.add(className);
    hintText.style.color = '#F57463';
    setTimeout(() => {
        hintContainer.style.display = 'none';
        inputElement.classList.remove(className);
    }, 2000);
}

