const poweredByDivWrapper = document.createElement('div');
poweredByDivWrapper.style.position = 'fixed';
poweredByDivWrapper.style.bottom = '0';
poweredByDivWrapper.style.left = '0';
poweredByDivWrapper.style.margin = '1em';
poweredByDivWrapper.style.fontSize = '1em';

const poweredByDiv = document.createElement('div');
poweredByDiv.id = 'poweredBy';
poweredByDiv.style.backgroundColor = 'black';
poweredByDiv.style.color = 'white';
poweredByDiv.style.padding = '5px';
poweredByDiv.style.borderRadius = '5px';

const poweredBySpan = document.createElement('span');
poweredBySpan.textContent = 'Powered By ';
poweredByDiv.appendChild(poweredBySpan);

const poweredByLink = document.createElement('a');
poweredByLink.href = 'https://gearheartstudios.com/?i=1';
poweredByLink.target = '_blank';
poweredByLink.style.color = 'white';
poweredByLink.style.textDecoration = 'underline';
poweredByLink.textContent = 'Gearheart Studios';
poweredByDiv.appendChild(poweredByLink);

poweredByDivWrapper.appendChild(poweredByDiv);
document.body.appendChild(poweredByDivWrapper);
