export default function useEmailClick() {
    const email = 'caiosribeiro@bol.com.br';
    const subject = encodeURIComponent('Enteresse no portfólio');
    const body = encodeURIComponent('');
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
    const mailToLink = `maito:${email}?subject=${subject}&body=${body}`;
    const newWindow = window.open(gmailLink, '_blank');

   setTimeout(() => {
        if(!newWindow || newWindow.closed) {
            window.location.href = mailToLink;
        };
    }, 500);
};