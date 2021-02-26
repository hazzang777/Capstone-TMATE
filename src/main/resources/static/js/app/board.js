const board = {

    // 클릭 이벤트 연결
    init : function () {
        const _this = this;
        // 글 작성
        $('#notice-write').on('click', function () {
            _this.noticeWrite();
        });

        // 글 수정
        $('#notice-modify').on('click', function () {
            _this.noticeModify();
        });

        // 글 삭제
        $('#notice-remove').on('click', function () {
            _this.noticeRemove();
        })
    },

    // 공지 글 작성
    noticeWrite : function () {
        const data = {
            bd_title: $('#notice-write-title').val(),
            bd_contents: $('#notice-write-content').val(),
            bd_status: $('#notice-write-status').text(),
            m_id: $('#m_id').val()
        };

        $.ajax({
            data: JSON.stringify(data),
            type: 'POST',
            url: '/api/noticewrite',
            dataType : 'JSON',
            contentType:'application/json; charset=utf-8'
        }).done(function () {
            alert("글 등록 완료");
            window.location.href = '/notice';
        }).fail(function (err) {
            alert(JSON.stringify(err));
        });
    },

    // 공지 글 수정
    noticeModify : function () {
        const data = {
            title: $('#title').val(),
            content: $('#content').val()
        };

        $.ajax({
            data: JSON.stringify(data),
            type: 'PUT',
            url: '/api/noticemodify',
            dataType: 'JSON',
            contentType: 'application/json; charset=utf-8'
        }).done(function () {
            alert("글 수정 완료");
            window.location.href = '/notice';
        }).fail(function (err) {
            alert(JSON.stringify(err));
        });
    },


    // 공지 글 삭제
    noticeRemove : function () {
        let data = {
            bd_id: $('#bd_id').text()
        };
        console.log(data.bd_id);

        $.ajax({
            data: data,
            type: 'DELETE',
            url: '/api/noticeremove',
        }).done(function () {
            alert("글 삭제 완료");
            window.location.href = '/notice';
        }).fail(function (err) {
            alert(JSON.stringify(err));
        });
    }
}

board.init();