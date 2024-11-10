/* eslint-disable no-case-declarations */
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';

const actions = [
  { icon: <SaveIcon />, name: 'Salvar', action: 'save' },
  { icon: <PrintIcon />, name: 'Imprimir', action: 'print' },
  { icon: <ShareIcon />, name: 'Compartilhar', action: 'share' },
];

export default function BasicSpeedDial() {
  const handleAction = (action) => {
    const pdfUrl = '/Curriculo.pdf'; // Certifique-se de que o nome do arquivo está correto

    switch (action) {
      case 'save':
        // Salvar o PDF
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'Curriculo-Cleverson.pdf';
        link.click();
        break;
      case 'print':
        // Abre o PDF em uma nova janela para impressão
        const printWindow = window.open(pdfUrl, '_blank');
        printWindow.onload = () => {
          printWindow.print();
        };
        break;
      case 'share':
        // Compartilhar usando a API de Web Share, apontando para o PDF
        if (navigator.share) {
          navigator.share({
            title: 'Currículo de Cleverson Resende',
            text: 'Confira meu currículo online!',
            url: `${window.location.origin}${pdfUrl}`, // URL completa do PDF
          }).catch((error) => console.log('Erro ao compartilhar:', error));
        } else {
          alert('A API de compartilhamento não é suportada neste dispositivo.');
        }
        break;
      default:
        break;
    }
  };

  return (
    <Box sx={{ height: 100, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => handleAction(action.action)} // Adiciona o manipulador de clique
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
