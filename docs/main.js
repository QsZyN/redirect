let url = new URL(window.location.href);
let params = url.searchParams;
if (params.get('to') ===  null){
    window.location.href="https://github.com/QsZyN/redirect";
}else{
    window.location.href=decodeURIComponent(params.get('to'));
}
