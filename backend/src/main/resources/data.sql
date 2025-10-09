-- Aqui podemos criar instruções SQL DML (Insert, Update, Delete)
-- Podem haver mais uma instrução, separadas por ponto e vírgula (;)

INSERT INTO regras (minimo_pets, maximo_pets)
VALUES
(1, 10);

INSERT INTO raca (codigo, nome)
VALUES
('VIRA_LATA', 'Vira-lata'),
('SIAMES', 'Siamês'),
('PERSA', 'Persa'),
('BULDOGUE', 'Bulldogue'),
('PASTOR_ALEMAO', 'Pastor Alemão');

INSERT INTO especie (codigo, nome)
VALUES
('CAO', 'Cachorro'),
('GATO', 'Gato'),
('PASSARO', 'Pássaro'),
('ROEDOR', 'Roedor'),
('REPTIL', 'Réptil');


INSERT INTO pet (nome_pet, nome_dono, especie_codigo, raca_codigo, email_dono, peso, altura, nascimento, validade_chip, cpf_dono, telefone_dono, ativo) VALUES
('WWWWWWWWWWWW', 'QQQQQQQQQ', 'CAO', 'VIRA_LATA', 'joao.silva@example.com', 15.5, 0.5, '2020-01-15', '2030-01-15', '12345678901', '(11) 98765-4321', true);
