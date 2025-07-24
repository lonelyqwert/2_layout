document.querySelector("button").addEventListener("click", function () {
    const input = document.querySelector("input");
    const roomNumber = input.value.trim().toLowerCase(); // Например: "111"
    
    const allRooms = document.querySelectorAll(".room_card");

    allRooms.forEach(function (room) {
        const cardRoomNumber = room.getAttribute("data-room");

        if (cardRoomNumber === roomNumber || roomNumber === "") {
            room.style.display = "block"; // Показываем совпадение или все комнаты, если поле пустое
        } else {
            room.style.display = "none"; // Скрываем остальные
        }
    });
});