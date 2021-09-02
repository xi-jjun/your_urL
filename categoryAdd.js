// category adding

const part1 = document.querySelector('part1');
const categoryAdd = document.getElementById('category-add'); // 카데고리 div
const categorySelect = document.querySelector('select'); // 선택 목록 영역
const categoryAddInput = categoryAdd.querySelector('input'); // 카테고리에 추가될 제목 입력란.
const categoryAddButton = categoryAdd.querySelector('button'); // +

categoryAddButton.addEventListener('click', function() {
    const list = categoryAddInput.value; // 카테고리 이름으로 넣을 제목값
    const selectLists = categorySelect.innerHTML;

    const check = '"' + list + '"';
    if(selectLists.includes(check)) { // if same category name was exsisted, then do nothing
        alert('The NAME is exsisted');
        return;
    }

    let html = `<option value="${list}">${list}</option>`;
    categorySelect.innerHTML += html;
});