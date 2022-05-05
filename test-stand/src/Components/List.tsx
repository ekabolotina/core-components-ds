import React from 'react';
import { Space } from '@alfalab/core-components-space';
import { List } from '@alfalab/core-components-list';
import { Typography } from '@alfalab/core-components-typography';
import { Wrapper } from './Wrapper';

const ListExample = () => {
    return (
        <Wrapper>
            <Space>
                <List tag='ul'>
                    <Typography.Text view='primary-medium'>Накопительные счета</Typography.Text>
                    <Typography.Text view='primary-medium'>Депозиты</Typography.Text>
                    <Typography.Text view='primary-medium'>Кредиты</Typography.Text>
                </List>

                <List tag='ul' marker='•'>
                    <Typography.Text view='primary-medium'>
                        Индивидуальное обслуживание в любом отделении в России
                    </Typography.Text>
                    <Typography.Text view='primary-medium'>
                        Повышенные % ставки по депозитам
                    </Typography.Text>
                    <Typography.Text view='primary-medium'>
                        Льготная конвертация валют.
                    </Typography.Text>
                </List>

                <List tag='ol'>
                    <Typography.Text view='primary-medium'>Ипотечный кредит</Typography.Text>
                    <Typography.Text view='primary-medium'>Потребительский кредит</Typography.Text>
                    <Typography.Text view='primary-medium'>
                        Бесплатные сервисы для накоплений
                    </Typography.Text>
                </List>
            </Space>
        </Wrapper>
    );
};

export default ListExample;
