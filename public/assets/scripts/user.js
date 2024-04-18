window.onload = function(e){ 
    $.get("/api/users", function(data, status){
        let userTable = $('#user-table')
        const users = data || []
        users.forEach((user) => {
            userTable.append(`<tr>
                <td class="border-bottom-0">
                    <h6 class="fw-semibold mb-0">${user._id}</h6>
                </td>
                <td class="border-bottom-0">
                    <h6 class="fw-semibold mb-1">${user.fullname}</h6>                      
                </td>
                <td class="border-bottom-0">
                    <p class="mb-0 fw-normal">${user.email}</p>
                </td>
                <td class="border-bottom-0">
                <div class="d-flex align-items-center gap-2">
                    <p class="mb-0 fw-normal">${user.password}</p>
                </div>
                </td>
                <td>
                    <button onclick="deleteUser('${user._id}')" class="btn btn-danger">Xóa</button>
                </td>
            </tr>`)
        })
    });

    window.deleteUser = (id) => {
        console.log(id)
        $.ajax({
            url: '/api/users?id=' + id,
            type: 'DELETE',
            success: function(result) {
                // Do something with the result
                console.log(result)
                window.location.reload()
            }
        })
    }

    window.createUser = () => {
        const fullname = $('#userFullName').val()
        const email = $('#userEmail').val()
        const password = $('#userPassword').val()
        $.ajax({
            url: '/api/users',
            type: 'POST',
            contentType: "application/json",
            data: JSON.stringify({
                fullname: fullname,
                email: email,
                password: password
            }),
            success: function(result) {
                // Do something with the result
                window.location.reload()
            }
        })
    }


}