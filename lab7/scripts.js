document.addEventListener("DOMContentLoaded", function () {
    const todoList = document.getElementById("todo-list");
    const todoInput = document.getElementById("todo-input");
    const addButton = document.getElementById("add-button");
    // อาร์เรย์ส าหรับเก็บรายการ Todo
    let todos = [];
    // เพิ่มรายการ Todo
    function addTodo() {
        const todoText = todoInput.value.trim();
        if (todoText !== "") {
            const todoItem = {
                text: todoText,
                completed: false,
            };
            todos.push(todoItem);
            renderTodoList();
            todoInput.value = "";
        }
    }
    // ลบรายการ Todo
    function deleteTodo(index) {
        todos.splice(index, 1);
        renderTodoList();
    }
    // ตรวจสอบ/ยกเลิกการเสร็จสิ้นรายการ Todo
    function toggleComplete(index) {
        todos[index].completed = !todos[index].completed;
        renderTodoList();
    }
    // แสดงรายการ Todo บนหน้าเว็บ
    function renderTodoList() {
        console.log(todos);
        todoList.innerHTML = "";
        for (let i = 0; i < todos.length; i++) {
            const todoItem = todos[i];
            const listItem = document.createElement("li");
            listItem.textContent = todoItem.text;
            if (todoItem.completed) {
                listItem.classList.add("completed");
            }
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "ลบ";
            deleteButton.addEventListener("click", () => deleteTodo(i));
            const completeButton = document.createElement("button");
            completeButton.textContent = todoItem.completed ? "ยกเลิก" : "เสร็จ";
            completeButton.addEventListener("click", () => toggleComplete(i));
            listItem.appendChild(completeButton);
            listItem.appendChild(deleteButton);
            todoList.appendChild(listItem);
        }
    }
    // การกดปุ่ ม "เพิ่ม"
    addButton.addEventListener("click", addTodo);
    // การกด Enter ใน input
    todoInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTodo();
        }
    });

    // แสดงรายการ Todo คร้ังแรก
    renderTodoList();
});

// รอให้ DOM โหลดเสร็จก่อนที่จะทำการทำงาน
document.addEventListener("DOMContentLoaded", function () {
    // อ้างอิงถึง HTML elements ที่ต้องใช้
    const todoList = document.getElementById("todo-list");
    const todoInput = document.getElementById("todo-input");
    const addButton = document.getElementById("add-button");

    // อาร์เรย์สำหรับเก็บรายการ Todo
    let todos = [];

    // เพิ่มรายการ Todo
    function addTodo() {
        const todoText = todoInput.value.trim();
        // ตรวจสอบว่า input ไม่ว่างเปล่า
        if (todoText !== "") {
            const todoItem = {
                text: todoText,
                completed: false,
            };
            todos.push(todoItem);
            renderTodoList(); // อัปเดตแสดงรายการ Todo บนหน้าเว็บ
            todoInput.value = ""; // ล้างค่า input
        }
    }

    // ลบรายการ Todo
    function deleteTodo(index) {
        todos.splice(index, 1);
        renderTodoList(); // อัปเดตแสดงรายการ Todo บนหน้าเว็บ
    }

    // ตรวจสอบ/ยกเลิกการเสร็จสิ้นรายการ Todo
    function toggleComplete(index) {
        todos[index].completed = !todos[index].completed;
        renderTodoList(); // อัปเดตแสดงรายการ Todo บนหน้าเว็บ
    }

    // แสดงรายการ Todo บนหน้าเว็บ
    function renderTodoList() {
        console.log(todos); // แสดงรายการ Todo ใน Console เพื่อตรวจสอบ

        todoList.innerHTML = ""; // ล้างเนื้อหาปัจจุบันของรายการ Todo

        for (let i = 0; i < todos.length; i++) {
            const todoItem = todos[i];
            const listItem = document.createElement("li");
            listItem.textContent = todoItem.text;

            // เพิ่มคลาส "completed" ถ้า Todo ถูกทำเสร็จแล้ว
            if (todoItem.completed) {
                listItem.classList.add("completed");
            }

            // สร้างปุ่ม "ลบ" และเพิ่มเหตุการณ์ที่เรียกใช้ฟังก์ชัน deleteTodo
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "ลบ";
            deleteButton.addEventListener("click", () => deleteTodo(i));

            // สร้างปุ่ม "เสร็จ" หรือ "ยกเลิก" และเพิ่มเหตุการณ์ที่เรียกใช้ฟังก์ชัน toggleComplete
            const completeButton = document.createElement("button");
            completeButton.textContent = todoItem.completed ? "ยกเลิก" : "เสร็จ";
            completeButton.addEventListener("click", () => toggleComplete(i));

            // เพิ่มปุ่มลงใน ListItem
            listItem.appendChild(completeButton);
            listItem.appendChild(deleteButton);

            // เพิ่ม ListItem ลงในรายการ Todo
            todoList.appendChild(listItem);
        }
    }

    // เพิ่มเหตุการณ์ที่เรียกใช้ฟังก์ชัน addTodo เมื่อคลิกที่ปุ่ม "เพิ่ม"
    addButton.addEventListener("click", addTodo);

    // เพิ่มเหตุการณ์ที่เรียกใช้ฟังก์ชัน addTodo เมื่อกด Enter ใน input
    todoInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTodo();
        }
    });

    // แสดงรายการ Todo ครั้งแรกเมื่อหน้าเว็บโหลด
    renderTodoList();
});
