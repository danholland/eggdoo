import './tasks.html';

Template.Tasks_input.events({ 
    'focus #task-note': function(e) { 
         $('#task-title').removeClass('hidden');
    },
    'focusout #task-note': function(e) {
        if(document.activeElement.id != "task-note"){
            var newTarget = "";
            if(e.relatedTarget){
                newTarget = e.relatedTarget.id;
            }
            if($('#task-title').val() == "" && newTarget != "task-title" && $('#task-note').val() == ""){
                /*
                var input = $(document.createElement('input')).attr({
                    id: "task-note",
                    "class" : $('#task-note').attr("class"),
                    placeholder: "Take a note..."
                });
                $('#task-note').replaceWith(input);
                */
                $('#task-title').addClass('hidden');
            }
        }
    },
    'focusout #task-title': function(e) {
        if(document.activeElement.id != "task-title"){
            var newTarget = "";
            if(e.relatedTarget){
                newTarget = e.relatedTarget.id;
            }
            if($('#task-title').val() == "" && newTarget != "task-note" && $('#task-note').val() == ""){
                $('#task-title').addClass('hidden');
            }
        }
    },
    'keyup #task-note': function(e) {
        //console.log(e.keyCode);
        if(e.keyCode == 13 && e.ctrlKey){
            var task = $('#task-note').val().trim();
            console.log(task);
            $('#task-note').val(task);
            if(task != ""){
                var title = $('#task-title').val().trim();
                console.log("Submit");
            }
        } else if(e.keyCode == 13 && e.target.type=="input"){
            var textarea = $(document.createElement('textarea')).attr({
                id: "task-note",
                "class" : $('#task-note').attr("class")
            });
            $(textarea).val($('#task-note').val() + '\n');
            $('#task-note').replaceWith(textarea);
            $('#task-note').addClass('materialize-textarea');
            $('#task-note').focus();
        } else if(e.keyCode == 8 && $('#task-note').val()=="" && e.target.type == "textarea"){
            var input = $(document.createElement('input')).attr({
                id: "task-note",
                "class" : $('#task-note').attr("class"),
                placeholder: "Take a note..."
            });
            $(input).removeClass('materialize-textarea');
            $('#task-note').replaceWith(input);
            $('#task-note').focus();
        }
    }
});