 export default function useFullScreen(id){
	let element = document.getElementById(id);
	if(element.wozRequestFullScreen){
		element.wozRequestFullScreen();
	}else if (element.webkitRequestFullScreen){
		element.webkitRequestFullScreen();
	};
};