$(function() {
            $("#word-form").submit(function(event) {
                event.preventDefault();
                let word = $("#word-input").val().trim();
                if (word !== "") {
                    $.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`, function(data) {
                        let definition = data[0].meanings[0].definitions[0].definition;
                        $("#definition").text(`Definition: ${definition}`);
                    }).fail(function() {
                        $("#definition").text("Word not found.");
                    });
                }
            });
        });