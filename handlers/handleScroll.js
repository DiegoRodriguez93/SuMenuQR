
    export const handleScroll = (id) => {

        let element = document.getElementById(id);

        element.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest"
          });

    }